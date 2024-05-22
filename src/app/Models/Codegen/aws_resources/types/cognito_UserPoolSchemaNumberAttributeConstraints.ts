import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolSchemaNumberAttributeConstraints {
  // Maximum value of an attribute that is of the number data type.
  maxValue?: string;

  // Minimum value of an attribute that is of the number data type.
  minValue?: string;
}

export function cognito_UserPoolSchemaNumberAttributeConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maxValue",
      "Maximum value of an attribute that is of the number data type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minValue",
      "Minimum value of an attribute that is of the number data type.",
      [],
      false,
      false,
    ),
  ];
}
