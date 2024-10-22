import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "128022651007-t8vse2hilvu7v50eetuae55fqvc9ou16.apps.googleusercontent.com",
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  iosClientId:
    "YOUR_IOS_CLIENT_ID",
});

const App = () => {
  return (
    <Navigation/>
  )
}
export default App