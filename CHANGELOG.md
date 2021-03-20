# Version 1.0
First public release

# Version 1.1
It is now possible to jump directly to a PDF bookmark by the new interactive methods or by xml-parameter.

Added new methods for interactive control
* goToPage(index: number) : void;
* goToFirstPage() : void;
* goToLastPage() : void;
* getBookmarks(): Bookmark[];
* getBookmarkByIndexPath(indexes: number[]): Bookmark;
* getBookmarksByLabel(label: string): BookmarkCommon[];
* goToBookmark(bookmark: Bookmark): void;
* getAuthor(): string;

Added new parameters:
* bookmarklabel (string)
```
<ui:PDFViewNg src="~/test.pdf" bookmarklabel="PAGE 3"></ui:PDFViewNg>
```

* bookmarkpath (multiple integers separated by komma as string)
```
<ui:PDFViewNg src="~/test.pdf" bookmarkpath="2,0"></ui:PDFViewNg>
```

# Version 1.2
Added methods:
* loadPDF(src: string): Promise<any>;
* getSubject(): string;
* getTitle(): string;
* getCreator(): string;
* getCreationDate(): string;

Android:
* Added event "error". (gets triggered when loaded by pure xml-variant)
* Added exception for downloading failed for loadPDF().

# Version 1.3
Added methods(iOS):
* showExternalControler(rect: ControllerRect): void;

# Version 1.3.1
Bugfix(iOS):
* Add methods to index;

# Version 2.0
Upgrade to Nativescript 7

# Version 2.0.1
* Adds NS7 compatibility note to readme
* Minor refactoring change that reverts public android/ios accessors with type casts back to before NS7 upgrade