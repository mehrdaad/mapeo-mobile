package com.mapeomobile;

import android.app.Application;
import android.support.annotation.Nullable;

// import com.facebook.react.ReactApplication;
// import com.staltz.reactnativenode.RNNodePackage;
// import com.mapbox.rctmgl.RCTMGLPackage;
// import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
// import com.facebook.react.shell.MainReactPackage;
// import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

  //   @Override
  //   public boolean getUseDeveloperSupport() {
  //     return BuildConfig.DEBUG;
  //   }

  //   @Override
  //   protected List<ReactPackage> getPackages() {
  //     return Arrays.<ReactPackage>asList(
  //         new MainReactPackage(),
  //         new RNNodePackage(),
  //         new RCTMGLPackage()
  //     );
  //   }

  //   @Override
  //   protected String getJSMainModuleName() {
  //     return BuildConfig.FLAVOR == "benchmark" ? "benchmark/index" : "index";
  //   }
  // };

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return null;
  }

  // @Override
  // public ReactNativeHost getReactNativeHost() {
  //   return mReactNativeHost;
  // }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }

  // @Override
  // public void onCreate() {
  //   super.onCreate();
  //   SoLoader.init(this, /* native exopackage */ false);
  // }
}
