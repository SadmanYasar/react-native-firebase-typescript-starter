Setup:
- Setup Expo Project with ```npx create-react-native-app -t with-dev-client ./```
- Install Firebase with ```expo install @react-native-firebase/app @react-native-firebase/firestore```
- Download the google-services.json (Android) and GoogleServices-Info.plist (IOS) from Firebase and put them in the root folder of the project
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
- Follow [this](https://www.youtube.com/watch?v=LUFHXsBcW6w&t=217s)