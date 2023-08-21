# REACT NATIVE FIREBASE TYPESCRIPT STARTER

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

Experiment with Development Client in SDK 40.

## 🚀 How to use

> `npx create-react-native-app my-app -t with-dev-client`

- Run `expo start --dev-client` to try it out.
- Install Firebase with ```expo install @react-native-firebase/app @react-native-firebase/firestore```
- Download the google-services.json (Android) and GoogleServices-Info.plist (IOS) from Firebase and put them in the root folder of the project
- Put these files in .gitignore
- Check if app.json has the following:
```sh
{
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "plugins": [
      "@react-native-firebase/app"
    ]
  }
}
```
- Follow [this](https://www.youtube.com/watch?v=LUFHXsBcW6w&t=217s) to build with EAS

## 🏗 Build with EAS

You can easily use this project with `EAS` - just follow the steps below.

### ⚙️ Prepare project

- adjust value of `ios.bundleIdentifier` and `android.package` in `app.json`
- run `eas build:configure`

### 💪 Build whatever you want

This example comes with two pre-configured build types: `release` (a production version of your app - ready to be uploaded to stores), `with-dev-client` (a development version of your app that can be shared with your teammates).

To build the app with the dev client, just run `eas build --profile with-dev-client`.

> **Note**: the `with-dev-client` uses the **internal distribution** on **iOS**. That's why, you need to add your device to be able to install the built app. To do it, you can use `eas device:create`.

**For more information about EAS, check out [documentation](https://docs.expo.dev/eas/).**

## 📝 Notes

- [Development Client docs](https://docs.expo.dev/clients/introduction/)
