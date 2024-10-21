import { Image, StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import CustomText from '../../components/global/CustomText'
import { FONTS } from '../../constants/Fonts'
import { screenWidth, screenHeight,normalizeModerately } from '../../utils/Scaling'
import LoginImageDark from "../../assets/images/login_dark_animation.png";
import LoginImageLight from "../../assets/images/login_animation_light.png";
import SocialLoginButton from '../../components/auth/SocialloginButton'
import GoogleIcon from "../../assets/images/google.png";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableText from '../../components/global/TouchableText'
import { navigate } from '../../utils/NavigationUtils'
import BottomText from '../../components/auth/BottomText'


const LoginScreen = () => {
  const theme = useColorScheme()
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant='h3'>
          Together we Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest • Pay • Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={theme === "dark" ? LoginImageDark : LoginImageLight}
          />
        </View>
        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={async () => {}}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color="black" />}
          text="Continue with Apple"
          onPress={async () => {}}
        />
        <TouchableText
          firstText="Use other email ID"
          onPress={() => navigate("EmailScreen")}
          style={styles.touchText}
        />
        <BottomText/>
      </View>
    </CustomSafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  gimg: {
    height: 20,
    width: 20,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(25),
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
})
export default LoginScreen