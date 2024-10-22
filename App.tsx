import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {WEB_CLIENT_ID} from "@env"

GoogleSignin.configure({
  webClientId:WEB_CLIENT_ID,
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