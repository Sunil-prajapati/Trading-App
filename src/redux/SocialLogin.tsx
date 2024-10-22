import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Alert } from "react-native"

export const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {data} = await GoogleSignin.signIn();
      await GoogleSignin.signOut()
      console.log(data?.idToken)
      Alert.alert("Token")
    } catch (error) {
    //   handleSignInError(error);
    console.log(error,"signInWithGoogle")
    }
  };

  export default {
    signInWithGoogle
  }