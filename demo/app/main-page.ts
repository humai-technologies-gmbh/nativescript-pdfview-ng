import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { Observable } from 'tns-core-modules/data/observable';
import { PDFViewNg } from '../../src';


// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    let view:PDFViewNg = page.getViewById('pdfview');
    if (view){
      view.on("load",()=>{
        let items = view.getBookmarksByLabel("PAGE 4")
        console.error("found:",items);
        view.goToBookmark(items[0]);
        console.log("Author:",view.getAuthor());
        console.log("Pages:",view.getPageCount());
      });
    }
}

export class HelloWorldModel extends Observable {
    constructor() {
      super();


    }
  }
  