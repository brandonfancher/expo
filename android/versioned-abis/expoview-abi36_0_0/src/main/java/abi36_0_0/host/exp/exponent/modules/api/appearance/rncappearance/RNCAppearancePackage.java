package abi36_0_0.host.exp.exponent.modules.api.appearance.rncappearance;

import androidx.annotation.NonNull;

import abi36_0_0.com.facebook.react.ReactPackage;
import abi36_0_0.com.facebook.react.bridge.NativeModule;
import abi36_0_0.com.facebook.react.bridge.ReactApplicationContext;
import abi36_0_0.com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RNCAppearancePackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        List modules = new ArrayList();
        modules.add(new RNCAppearanceModule(reactContext));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new RNCAppearanceManager());
    }
}
