import { Property, View } from 'tns-core-modules/ui/core/view';

export abstract class PDFViewNgCommon extends View {
  public src: string;
  public static loadEvent = 'load';

  constructor() {
    super();
  }

  public static notifyOfEvent(
    eventName: string,
    pdfViewRef: WeakRef<PDFViewNgCommon>,
  ) {
    const viewer = pdfViewRef.get();
    if (viewer) {
      viewer.notify({ eventName, object: viewer });
    }
  }
}
export const srcProperty = new Property<PDFViewNgCommon, string>({
  name: 'src',
});
srcProperty.register(PDFViewNgCommon);

export const defaultpageProperty = new Property<PDFViewNgCommon, string>({
  name: 'defaultpage',
});
defaultpageProperty.register(PDFViewNgCommon);