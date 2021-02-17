# ***Español***

# Despliegue

El despliegue a la web se realiza de forma automática con cada push al repositorio. Para más información, mirar [esta card de Trello](https://trello.com/c/xHs5s2MC/862-conectar-el-blog-con-el-sitio-web-tp-a-ro).

# Blog de Spotter

Blog en inglés: [Click aquí](https://www.spotter.biz/blog/)

Blog en español: [Click aquí](https://www.spotter.biz/blog/es/)

## Crear/editar post

Para crear o editar un post, pulsamos en el siguiente enlace: http://prose.io/#GearTranslations/spotter-blog.

En dicho enlace veremos los posts existentes, cada cual tendrá un botón para editarlo. Además de un botón para crear uno nuevo en la parte superior de la página.

Cuando hacemos click en crear o editar un post, nos lleva a una pantalla de edición. En ella, vemos cuatro botones en la esquina superior derecha:

1. **El botón 'Edit'.** Nos lleva al cuadro de texto donde escribiremos nuestro post. El recuadro para poner el título se encuentra encima de este, y por defecto sale como 'Untitled'.

*Nota:* Los posts aceptan Markdown como formato, para más información, mirar aquí: http://markdown.es/sintaxis-markdown/

2. **El botón 'Preview'.** Nos lleva a la interfaz de previsualización del post. Es conveniente previsualizar el post antes de subirlo al blog, aunque hay cosas que no se previsualizan bien en esta interfaz, como las imágenes (de las que hablaremos más adelante).

3. **El botón 'Metadata'.** Antes de poder hacer que un post sea visible, es muy importante rellenar estas opciones. Si no están correctamente rellenadas es posible que no aparezcan en nuestro blog los posts que creemos. Las opciones son las siguentes:

  * **Subtitle:** El subtítulo del post. Si no tiene subtítulo, se puede dejar en blanco.
  * **Date:** La fecha de publicación del post.
  * **Publish:** La opción 'publicado'. Si está activada, el post será visible. Si no, el post se guarda como borrador, y puede ser publicado más adelante.
  * **Language:** El idioma en el que está escrito el post. Es importante que esté bien escrito, o no aparecerá. Si un post está en español, se pone 'es', y si está en inglés, 'en'.
  * **Category:** La categoría del post. Hay que escribirla como se ven a continuación, sin mayúsculas ni espacios, y respetando las '\_' Las categorías actuales son:

    * **en**

    * **es**

      * business_intelligence

  * **Social network image** La imagen principal del post. Lo que hay que poner aquí es: /img/nombredelaimagen.png (o .jpg, o la extensión que tenga). Si es una imagen nueva, hay que cargarla primero. Para eso, vamos al editor y pulsamos en el cuadradito de insertar imagen. Ahí la subimos desde nuetro pc y le damos a insertar. El sistema nos generará la siguiente línea de código: \!\[titulodelaimagen\]\(\{\{site.baseurl\}\}/img/nombredelaimagen.png\)). Copiamos la parte "/img/nombredelaimagen.png", que es lo que tendremos que poner en Social network image, y borramos la linea de codigo que acabamos de poner (si no la borramos, aparecerá la imagen dos veces, una como imagen principal y otra dentro del texto, así que es importante borrarla si no queremos esto)

  * **Raw metadata:** Más opciones. Por ahora es mejor dejarlas en blanco.

4. **El botón 'Guardar'.** Pulsando este botón, el post es guardado. Si está todo correcto y la opción 'publish' activada, el post aparecerá en el blog.

## Añadir un link con un texto personalizado

* \[Texto Personalizado\]\(Link con el http...)\)

## Añadir una imagen al post

Para generar una imagen en mitad del post, pulsamos el botón 'Insert image' desde el editor. Esto nos generará el siguiente código que debe ir en la parte del post donde queremos que salga la imagen:

* \!\[titulodelaimagen\]\(\{\{site.baseurl\}\}/img/nombredelaimagen.png\)

El título de la imagen se debe especificar, y es una breve descripción de la imagen, para que la gente que no pueda cargar o ver la imagen sepa de qué se trata. Por ejemplo, 'Gatito comiendo' en una imagen donde sale un gato comiendo de su bol.

El *.image-left* le da la propiedad a la imagen de ponerse a la izquierda del texto en vez de encima, haciendo que quede más profesional:

* \!\[titulodelaimagen\]\(\{\{site.baseurl\}\}/img/nombredelaimagen.png\)**{: .image-left}**

## Añadir una imagen con un link para ir a otra página

* [\!\[titulodelaimagen\]\(\{\{site.baseurl\}\}/img/nombredelaimagen.png\)]**(link)**

# ***English***

# Deploy

There is an automatic deploy to spotter-web with each push to the repository. For more information check [this Trello card](https://trello.com/c/xHs5s2MC/862-conectar-el-blog-con-el-sitio-web-tp-a-ro).

# Spotter Blog

The blog is published [Here](https://spotter.biz/blog/)

And the spanish version [Here](https://www.spotter.biz/blog/es/)

## New/Edit post

To create or edit a post, we use prose.io: http://prose.io/#GearTranslations/spotter-blog.

In that link, we have a list of posts, and buttons to edit, delete or create a new one.

In the new/edit interface, we can see four button at the top right:

1. **The 'edit' button.** It leads us to the edit interface. In that interface we can set a title, and write the content of the post.

*Note:* The edit interface admits Markdown. For more information, click here: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

2. **The 'preview' button.** It's convenient to preview the content of our post before publishing it.

3. **The 'metadata' button.** This one is very important, because we have to set up a few options before making our post visible. The options are:
  * **Subtitle:** The post subtitle. It's not mandatory, you can leave it blank.
  * **Date:** The publication date of the post.
  * **Publish:** If you check this option, the post will be visible. If not, it will be saved as a draft. You can always publish a draft by checking this option.
  * **Language:** The post language. It's important to set this to the correct language, or the post will not appear.
  * **Category:** Category. The current available categories are:

    * **en**

    * **es**

      * business_intelligence

  * **Social network image** The main image of the post. It should be written like this: /img/nameoftheimage.png If you want to upload a new image, you need to go to the editor, and insert the image from there. Upload it from your computer, and the system will generate a code like this: \!\[titleoftheimage\]\(\{\{site.baseurl\}\}/img/nameoftheimage.png\). Copy the "/img/nameoftheimage.png" part, and delete the whole new line of code. Finally, paste the part you copied on the social network image section.

  * **Raw metadata:** More options. For now, you should leave it blank.

4. **The 'save' button.** You can save your post by clicking this button. If the options are setted properly, and the publish checkbox is checked, the post will be published.

## Add a link with a custom text

* \[Custom Text\]\(Link (With http...)\)

## Add an image to post

You can select an image from the editor -> insert image. When you select an image, a code will be generated:

* \!\[titleoftheimage\]\(\{\{site.baseurl\}\}/img/nameoftheimage.png\)

You can specify the title of the image. This title is a short description of the image, in example, a picture of a cat eating food would have the title "Cat eating food".

The *.image-left* will put the image at the left of the text instead of at top of it, leaving the post more professional:

* \!\[titleoftheimage\]\(\{\{site.baseurl\}\}/img/nameoftheimage.png\)**{: .image-left}**

## Add an image with a link

* [\!\[titleoftheimage\]\(\{\{site.baseurl\}\}/img/nameoftheimage.png\)]**(link)**
