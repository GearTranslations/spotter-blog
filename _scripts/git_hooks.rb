require 'sinatra'
require 'json'
require 'fileutils'

# Variables & constants
# --------------------------------
BLOG_HOST = ENV['SPOTTER_BLOG_HOST'] || '0.0.0.0'
BLOG_PORT = ENV['SPOTTER_BLOG_PORT'] || '9999'
BLOG_PATH = ENV['SPOTTER_BLOG_PATH']
BLOG_REBUILD_PATH = ENV['SPOTTER_BLOG_REBUILD_PATH']
BLOG_REBUILD_BRANCH = ENV['SPOTTER_BLOG_REBUILD_BRANCH'] || 'master'

BLOG_REBUILD_SCRIPT = '_scripts/rebuild.sh'

# Sinatra configuration
# --------------------------------
set :bind, BLOG_HOST
set :port, BLOG_PORT

# Helper methods
# --------------------------------

helpers do
  def master?(json)
    branch(json) =~ /master/
  end

  def branch(json)
    json['ref']
  end

  def rebuild_blog
    FileUtils.cd(BLOG_PATH) do
      system "/bin/bash #{BLOG_REBUILD_SCRIPT} #{BLOG_REBUILD_PATH} #{BLOG_REBUILD_BRANCH}"
    end
  end
end

# Route listeners
# --------------------------------

get '/' do
  'Server is running'
end

post '/payload' do
  push = JSON.parse(request.body.read)

  if master? push
    puts "Rebuilding blog..."
    rebuild_blog
  else
    puts "Ignoring push request on #{branch(push)}"
  end

  status 200
end
