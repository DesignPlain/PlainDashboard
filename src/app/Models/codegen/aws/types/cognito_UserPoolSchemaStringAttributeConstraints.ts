import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_UserPoolSchemaStringAttributeConstraints {
  // Maximum length of an attribute value of the string type.
  maxLength?: string;

  // Minimum length of an attribute value of the string type.
  minLength?: string;
}

export function cognito_UserPoolSchemaStringAttributeConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maxLength",
      "Maximum length of an attribute value of the string type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minLength",
      "Minimum length of an attribute value of the string type.",
      () => [],
      false,
      false,
    ),
  ];
}
