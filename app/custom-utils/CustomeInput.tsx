import {InputTypes} from 'helpers/alias';
import React from 'react';

// INPUT: label, name, formik.getProps
export function TextInput(props: InputTypes) {
  return <input {...props} />;
}

export function SelectInput() {
  return;
}

export function CheckBox() {}
