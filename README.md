flvnAccordeon
=============
Plugin jQuery 1.5+ pour créer un accordeon.


Installation
--------------
Il faut placer les lignes suivantes dans le header de votre page.
##### Si vous avez déjà jQuery 1.5+
```html
<script src="flvnAccordeon.js"></script>
```

##### Si vous n'avez pas jQuery 1.5+
```html
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="flvnAccordeon.js"></script>
```

Utilisation
--------------
##### La structure HTML
```html
<div id="accordeon">
  <p>Premier titre</p>
  <div>
    <p>Premier contenu</p>
  </div>
  <p>Second titre</p>
  <div>
    <p>Second contenu</p>
  </div>
  <p>Dernier titre</p>
  <div>
    <p>Dernier contenu</p>
  </div>
</div>
```
##### L'appel Javascript
```js
$(document).ready(function(){
  $('#accordeon').flvnAccordeon();
});
```
