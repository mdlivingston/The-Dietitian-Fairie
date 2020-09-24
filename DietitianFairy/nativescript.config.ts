import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'developer.maximus.DietitianFairy',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
  useLegacyWorkflow: false,
} as NativeScriptConfig
