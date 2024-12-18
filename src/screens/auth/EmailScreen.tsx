import React,{useState} from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import BackButton from '../../components/global/BackButton'
import CenteredLogo from '../../components/global/CenteredLogo'
import CustomInput from '../../components/inputs/CustomInput'
import { ScrollView,View } from 'react-native'
import { GlobalStyles } from '../../styles/GlobalStyles'
import CustomButton from '../../components/global/CustomButton'
import { validateEmail } from '../../utils/ValidationUtils'
import { navigate } from '../../utils/NavigationUtils'

const EmailScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    return true;
  };
  
  const handleOnSubmit = async () => {
    setLoading(true);
    if (validate()) {
     navigate('EmailOtpScreen',{
      email:email
     })
      // await dispatch(CheckEmail({ email: email.toLowerCase() }));
    }
    
    setLoading(false);
  };
  return (
    <CustomSafeAreaView>
      <BackButton/>
      <ScrollView>
      <CenteredLogo/>
      <CustomInput
          label="EMAIL ADDRESS"
          returnKeyType="done"
          value={email}
          inputMode="email"
          focusable={true}
          autoFocus={true}
          error={emailError}
          onEndEditing={() => validate()}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
          placeholder="Eg: me@gmail.com"
          onSubmitEditing={handleOnSubmit}
        />
        </ScrollView>
        <View style={GlobalStyles.bottomBtn}>
        <CustomButton
          text="NEXT"
          loading={loading}
          disabled={!validateEmail(email) || loading}
          onPress={() => {
            handleOnSubmit();
          }}
        />
      </View>
    </CustomSafeAreaView>
  )
}

export default EmailScreen