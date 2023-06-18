import React from 'react';
// import {TextInput} from 'custom-utils/CustomeInput';
import {TextInput} from 'react-native-paper';
// import {InputTypes} from 'helpers/alias';

//To Contain: label,name, Formik.getProps and attr
export const Input = props => {
  return (
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"

      // right={<TextInput.Affix text="/100" />}
      // {...props}
    />
  );
};
