# react-native-mixed-splash

This package is two packages in one.

IOS side: [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)   
Android side: [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

See instruction for integrate IOS in __react-native-splash-screen__, for Android in __react-native-bootsplash__.

### For example

1. ```npm i --save ```

2. ```cd ios && pod install```

## IOS
Update AppDelegate.m with the following additions:

```
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RNSplashScreen.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code
    [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];
    [RNSplashScreen show];
    return YES;
}

@end
```

## Android

Edit the android/app/src/main/java/com/yourprojectname/MainActivity.java file:

```
package com.orlev.miniut;

import com.reactnativenavigation.NavigationActivity;
import com.zoontek.rnbootsplash.RNBootSplash;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.splashscreen, MainActivity.this);
  }
}

```

Keep you AndroidManifest like this (android:theme="@style/AppTheme"):

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.you.app">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.VIBRATE"/>

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize">

      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustPan">
```

Create splashscreen on android/app/src/main/res/drawable/splashscreen.xml

```
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">

  <item
    android:drawable="@color/splash_color" />

  <item
    android:width="233dp"
    android:height="386dp"
    android:drawable="@drawable/splash_icon"
    android:gravity="center" />

</layer-list>

```

Update styles file android/app/src/main/res/values/styles.xml

```
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
      <item name="android:windowExitAnimation">@android:anim/fade_out</item>
      <item name="android:windowBackground">@drawable/splashscreen</item>
      <item name="android:windowTranslucentStatus">true</item>
      <item name="android:windowDrawsSystemBarBackgrounds">false</item>
    </style>

</resources>

```


## Usage in react native

```
import SplashScreen from "react-native-mixed-splash";


SplashScreen.hide(); // SplashScreen.show();
```