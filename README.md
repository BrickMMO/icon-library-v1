# BrickMMO Icon Library

This repo store the raw SVG files and the process to convert them to the [Glyphs Font Library](https://glyphs.brickmmo.com/). 

Instructions for converting the SVG files to the distributed font library are on [Coding for Entrepreneurs](https://www.codingforentrepreneurs.com/blog/svg-icons-to-css-webfonts-to-cdn).

After any changes have been made to the font library. ensure to update the [BrickMMO CDN](https://cdn.brickmmo.com).

Once you have made changes to the SVG files in the `svg` folder, run the following command:

```
icon-font-generator svg/*.svg -o glyphs -n endless -p endless --normalize  --round 0 --mono --height 250
```


---

## Project Stack

This project uses a [Node.js](https://nodejs.org/en) library and regular [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). The CDN is hosted using [GitHub Pages](https://pages.github.com/).

<img src="https://console.codeadam.ca/api/image/nodejs" width="60"> <img src="https://console.codeadam.ca/api/image/npm" width="60"> <img src="https://console.codeadam.ca/api/image/css" width="60"> 

---

## Repo Resources

* [BrickMMO](https://www.brickmmo.com/)
* [BrickMMO Glyphs](https://glyphs.brickmmo.com/)
* [BrickMMO CDN](https://cdn.brickmmo.com/)

<a href="https://brickmmo.com">
<img src="https://cdn.brickmmo.com/images@1.0.0/brickmmo-logo-coloured-horizontal.png" width="200">
</a>
