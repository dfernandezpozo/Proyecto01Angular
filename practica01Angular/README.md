# Proyecto Videojuegos Angular

  

## Descripción del proyecto

  

**practica01Angular** es una aplicación web desarrollada en Angular que permite a los usuarios interactuar con videojuegos de diversas formas.

## Requisitos mínimos

  

Para ejecutar el proyecto necesitas:

  

1.  **Node.js y npm**

- Angular requiere Node.js **(versión recomendada  18)**

- Verifica tus versiones:

```bash

node -v

npm -v

```

2. **Angular**

- Instala Angular CLI globalmente si no lo tienes:

```bash

npm install -g @angular/cli

```

- Verifica la instalación:

```bash

ng version

```

  

3.  **Editor de código** 

- Visual Studio Code u otro editor compatible con TypeScript y Angular.
- Una vez este todo instalado probamos el siguiente comando: 
```bash
ng serve -o
```
## Componentes
***Angular*** principalmente se basa en estructurar las cosas en componentes. En cada componente esta establecida la funcionalidad que queremos (***en nuestro html, csss y ts***) para que luego se muestren en las ***pages*** que hemos creado. Yo los tengo indicados en mi carpeta **components**.
## Carrusel
Mostrará las imágenes de videojuegos que se encuentran el carpeta de **public/assets**.
Además, permite al usuario avanzar entre imágenes (para ambos sentidos) del carrusel mediante el uso de flechas.
```bash
<div  class="carrusel-container">

<button  class="arrow left"  (click)="prevSlide()">&#10094;</button>

<div  class="slides">

@for (juego  of  juegos; track  $index; let  i  =  $index) {

<div

class="slide"

[class.active]="i  ===  currentIndex"

>

<img  [src]="juego.portada"  [alt]="juego.nombre">

<p  class="title">{{  juego.nombre  }}</p>

</div>

}

</div>

<button  class="arrow right"  (click)="nextSlide()">&#10095;</button>
</div>
```
## Lista
- Mostrará una lista vacía la  cual el usuario podrá rellenar para ***añadir*** los juegos que desee.
- Ya añadido el juego se podrá indicar haciendo ***click*** en el **icono** del trofeo para indicar que ese juego ha sido ***platinado***.
- Para añadir el nombre dle juego hacemos **binding**
```bash
<form  class="add-game-form"  (submit)="addGame(); $event.preventDefault()">

<input

type="text"

placeholder="Nombre del juego"

[(ngModel)]="newGame"

name="gameName"

required

/>

<button  type="submit">Agregar</button>

</form>
```
## Nav
Es el ***Header*** de la página. Linkea el header usando ***RouterLink*** con las demás páginas creadas en **Pages**.
## RegisterForm

Los usuarios pueden registrarse en la plataforma. Se verificará si el nombre, email y contraseña son correctos. En el caso contrario se le indicará correctamente al usuario el fallo que ha cometido con un mensaje de error.
```bash
<fieldset>

<label  for="username">Nombre de usuario</label>

<input  id="username"  type="text"  formControlName="username">

@if(username.invalid  &&  username.touched) {

<p  class="field-error">El nombre de usuario es obligatorio</p>

} @else {

<p  class="field-error"  style="display:none;"></p>

}

</fieldset>

```
- Se mostrarán en una lista a la derecha del formulario los usuarios registrados en la propia página.
## Surprise 
Como indica el nombre es ***SORPRESA***
  ## Pages
  
## Home/Recomendaciones del desarrollador

- Se muestra una galería de imágenes de videojuegos seleccionados por el desarrollador como recomendaciones.

- Permite a los usuarios descubrir juegos destacados de forma visual.

## Lista de videojuegos

- Los usuarios pueden agregar sus videojuegos favoritos a una lista escribiendo el nombre del juego. En caso de que no haya ningún juego agregado se mostrará el placeholder por defecto de ***Ponte las pilas con los platinos***

- Una vez agregado el juego el usuario podrá indicar si tiene el platino de dicho juego haciendo **click** al icono del trofeo.

  ## Register-Page
  Es la página de registro que mostrará el formulario implementado en código tanto en el ts como html y css del propio componente.
  
  ***En mi caso he hecho que al iniciar el proyecto vaya directamente a la página del formulario porque es lo más común , por esta razón mi página home sería la de recomendaciones del desarrollador***