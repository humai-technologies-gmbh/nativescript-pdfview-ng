
import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'tech.humai.nativescript.pdfview',
  appPath: 'app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;