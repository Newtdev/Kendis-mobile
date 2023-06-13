import React from 'react';
import {TextInput} from 'custom-utils/CustomeInput';
import {InputTypes} from 'helpers/alias';

//To Contain: label,name, Formik.getProps and attr
export const Input = props => {
  return (
    <div>
      <label htmlFor={props.name || props.id}>{props.label}</label>
      <TextInput {...props} />
    </div>
  );
};
