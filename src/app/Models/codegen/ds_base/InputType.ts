import { DynamicUIProps } from "./DynamicUIProps";

export enum InputType {
  String,
  Number,
  File,
  Bool,
  Array,
  Object,
  Map,
}

export function InputType_String_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "Value", "GenericType")];
}
export function InputType_Number_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Number, "Value", "GenericType")];
}

export function InputType_Map_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Key", "Key Name"),
    new DynamicUIProps(InputType.String, "Value", "Value"),
  ];
}
