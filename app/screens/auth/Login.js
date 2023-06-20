import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {Button, Surface, TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import {COLORS} from 'constant/Color';
import * as Yup from 'yup';
import Icon, {Icons} from 'components/Icons';
import AuthWrapper from 'components/AuthWrapper';
import {Route} from 'constant/Route';

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
    right: <TextInput.Icon icon="eye" />,
  },
];
const AuthOptions = [
  {
    name: 'ios-logo-google',
    type: Icons.Ionicons,
    color: COLORS.secondary,
    size: 27,
  },
  {
    name: 'ios-logo-apple',
    type: Icons.Ionicons,
    color: COLORS.secondary,
    size: 27,
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
    <AuthWrapper
      name="Sign In"
      desc="Add your sign in details"
      noAccount="Don't have an account?"
      linkName="Sign up"
      link={Route.SIGN_UP}>
      <View className="px-2">
        <View className="mt-14 h-42 flex-col justify-between">
          {inputData.map((_v, i) => (
            <View key={i}>
              <TextInput
                mode="outlined"
                outlineStyle={{borderRadius: 6}}
                placeholder={_v.placeholder}
                // onBlur={e => console.log(e)}
                label={_v.label}
                onChangeText={text => Formik.setFieldValue(_v.name, text)}
                right={_v.right}
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
        <View className="flex flex-row items-center h-36 justify-center w-full">
          {AuthOptions.map((_v, i) => (
            <TouchableOpacity key={i}>
              <Surface className="p-4 w-14 mx-2 bg-white rounded-xl">
                <Icon {..._v} />
              </Surface>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </AuthWrapper>
  );
}
