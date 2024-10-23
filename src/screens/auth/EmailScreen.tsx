import React,{useState} from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import BackButton from '../../components/global/BackButton'
import CenteredLogo from '../../components/global/CenteredLogo'
import CustomInput from '../../components/inputs/CustomInput'
import { ScrollView } from 'react-native'

const EmailScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    
    return true;
  };
  
  const handleOnSubmit = async () => {
    setLoading(true);
    
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
    </CustomSafeAreaView>
  )
}

export default EmailScreen