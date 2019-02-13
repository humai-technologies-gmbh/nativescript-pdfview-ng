# Nativescript-PDFView-Ng

This is a simple pdf viewer plugin that uses native libraries.
* IOS: PdfKit (https://developer.apple.com/documentation/pdfkit)
* Android: AndroidPdfViewer (https://github.com/barteksc/AndroidPdfViewer)

## Installation

```javascript
tns plugin add nativescript-pdfview-ng
```

OR

copy the tgz file to your project and reference it from your package.json

## Usage 

Just add it to your page:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page"
xmlns:ui="nativescript-pdfview-ng">
    <ui:PDFViewNg src="~/mypdf.pdf" defaultpage="1"></ui:PDFViewNg>
</Page>
```

OR

```js
import { PDFViewNg } from 'nativescript-pdfview-ng';
import { registerElement } from 'nativescript-angular';
registerElement('PDFViewNg', () => PDFViewNg);
```

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page">
    <PDFViewNg src="~/mypdf.pdf" defaultpage="1"></PDFViewNg>
</Page>
```

## API
| Property | Default | Description |
| --- | --- | --- |
| src | - | File url to a pdf file, can also be http |
| defaultpage | "0" | Initial page number to display |
    
## License
https://choosealicense.com/licenses/mit/
