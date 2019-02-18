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
### XML
| Property | Default | Description |
| --- | --- | --- |
| src | - | File url to a pdf file, can also be http |
| defaultpage | "0" | Initial page number to display |
| bookmarklabel | - | Search for a bookmark with the matching label and jump to the page |
| bookmarkpath | - |  |

### Class
```js
/// Go to page by id starting from 0 as first page.
goToPage(index: number) : void;

/// Go to first page.
goToFirstPage() : void;

/// Go to last page.
goToLastPage() : void;

/// Get a list of all bookmarks in the pdf.
getBookmarks(): Bookmark[];

/// Search for bookmark that is 
getBookmarkByIndexPath(indexes: number[]): Bookmark;

/// Search for all bookmarks that have the given label.
getBookmarksByLabel(label: string): BookmarkCommon[];

/// Jump to a given bookmark.
goToBookmark(bookmark: Bookmark): void;

/// Get meta information author from PDF.
getAuthor(): string;
```

## Examples
defaultpage: jump to page 4
```xml
<ui:PDFViewNg src="~/test.pdf" defaultpage="3"></ui:PDFViewNg>
```

bookmarklabel: jump to bookmark with label "PAGE 3"
```xml
<ui:PDFViewNg src="~/test.pdf" bookmarklabel="PAGE 3"></ui:PDFViewNg>
```

bookmarkpath: jump to the first child-bookmark of the third bookmark (bookmarks have a tree structure)
```xml
<ui:PDFViewNg src="~/test.pdf" bookmarkpath="2,0"></ui:PDFViewNg>
```

go to the first found bookmark with the label "PAGE 4"
```js
let view:PDFViewNg = page.getViewById('pdfview');
if (view){
    view.on("load",()=>{
        let items = view.getBookmarksByLabel("PAGE 4");
        console.error("found:",items);
        view.goToBookmark(items[0]);
    });
}
```

## Known bugs
* Android does not support jumping directly to a bookmark. It only jumps to the page the bookmark is on.

## License
https://choosealicense.com/licenses/mit/
