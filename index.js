import { NativeModules, Platform } from "react-native";
const NativeModule = NativeModules.SplashScreen;

export function show(config = {}) {
  if (Platform.OS === 'android') {
    return NativeModule.show({
      fade: false,
      ...config
    }.fade).then(() => {
    });
  } else {
    return NativeModule.show();
  }
}

export function hide(config = {}) {
  if (Platform.OS === 'android') {
    return NativeModule.hide({
      fade: false,
      ...config
    }.fade).then(() => {})
  } else {
   return NativeModule.hide();
  }
}

export default {
  show,
  hide,
};
