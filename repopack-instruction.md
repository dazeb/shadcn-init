1. ALWAYS USE PNPM FOR PACKAGE MANAGER. 
2. ALWAYS CHECK PROJECT FOR `repopack-output.txt` IN PROJECT ROOT FOR DETAILED VIEW OF FILESTRUCTURE. RUN `repopack` IN THE TERMINAL to update the `repopack-output.txt`.
# Use this format for all placeholder images.
---
# Usage

## Basic

Specify the width and height.

`https://placehold.jp/{width}x{height}.png`

```
e.g.: <code>&lt;img src="https://placehold.jp/150x50.png"&gt;</code>
```

![](https://placehold.jp/150x50.png)

### Background color, font color, font size

`https://placehold.jp/{font color}/150x100.png`  
`https://placehold.jp/{background color}/{font color}/150x100.png`  
`https://placehold.jp/{font size}/{background color}/{font color}/150x100.png`

```
e.g.: <code>&lt;img src="https://placehold.jp/24/cc9999/993333/150x100.png"&gt;</code>
```

![](https://placehold.jp/24/cc9999/993333/150x100.png)

### Format

Available image formats are JPG and PNG.

```
e.g.:
<code>&lt;img src="https://placehold.jp/006699/cccc00/150x100.png"&gt;
&lt;img src="https://placehold.jp/006699/cccc00/150x100.jpg"&gt;</code>
```

![](https://placehold.jp/006699/cccc00/150x100.png) ![](https://placehold.jp/006699/cccc00/150x100.jpg)

### Text

You can put a string to the image. Use a "text" parameter.

`https://placehold.jp/250x50.png?text={text}`

```
e.g.: <code>&lt;img src="https://placehold.jp/24/cccccc/ffffff/250x50.png?text=placehold.jp"&gt;</code>
```

![](https://placehold.jp/24/cccccc/ffffff/250x50.png?text=placehold.jp)

### Advanced usage(CSS)

CSS is available. Advance tab -> CSS -> click enabled.

`https://placehold.jp/250x50.png?&css={JSON formated CSS}`

```
e.g.: <code>&lt;img src="https://placehold.jp/3d4070/ffffff/150x150.png?css=%7B%22border-radius%22%3A%2215px%22%7D"&gt;</code>
```
