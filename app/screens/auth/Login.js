import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from 'components/ScreenWrapper';
import {Input} from 'components/Input';
import {Button, Surface, TextInput} from 'react-native-paper';
import FullLogo from 'assets/fullLogo.svg';
import mealImage from 'assets/mealImage.png';
import {useFormik} from 'formik';
import {COLORS} from 'constant/Color';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;
const inputData = [
  {
    name: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    right: null,
    keyboardType: 'email-address',
  },
  {
    name: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    keyboardType: 'default',
    right: <TextInput.Affix />,
  },
];

const LoginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});
export default function Login() {
  const Formik = useFormik({
    initialValues: {email: '', password: ''},
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: values => console.log(values),
  });
  return (
    <ScreenWrapper>
      <View className="px-2">
        <View className="bg-red-500 w-full  flex flex-row justify-between ">
          <View>
            <Icon name="rocket" size={30} color="#900" />
            <FullLogo width={50} height={20} />
            <View className="-mt-1">
              <Text className="font-bold text-lg text-secondary mt-2">
                Sign In
              </Text>
              <Text className="text-base text-secondary">
                Add your sign in details
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={mealImage}
              resizeMethod="auto"
              resizeMode="contain"
              className="object-contain"
            />
          </View>
        </View>

        <View className="mt-10 h-42 flex-col justify-between">
          {inputData.map(_v => (
            <View>
              <TextInput
                mode="outlined"
                outlineStyle={{borderRadius: 6}}
                placeholder={_v.placeholder}
                onBlur={e => console.log(e)}
                label={_v.label}
                onChangeText={text => Formik.setFieldValue(_v.name, text)}
                // right: null
                keyboardType={_v.keyboardType}
                error={Formik.errors[_v.name]}
              />
              <Text className="text-red-600 mt-2">
                {Formik.errors[_v.name]}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity className="ml-auto -mt-4">
          <Text>Forget password?</Text>
        </TouchableOpacity>
        <View className="h-[70]">
          <Button
            mode="contained"
            textColor="white"
            className="mx-auto outline mt-auto"
            buttonColor={COLORS.primary}
            style={{width: '80%'}}
            onPress={Formik.handleSubmit}
            // onPress={() => navigation.navigate(Route.SIGN_UP)}
          >
            Sign In
          </Button>
        </View>
        <View className="mx-auto mt-10">
          <Text className="text-secondary"> or Sign In With</Text>
        </View>
        <Surface>
          <Text>Google</Text>
        </Surface>
        <Surface>
          <Text>App</Text>
        </Surface>
      </View>
    </ScreenWrapper>
  );
}
