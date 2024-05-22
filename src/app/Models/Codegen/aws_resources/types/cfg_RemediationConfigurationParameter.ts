import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_RemediationConfigurationParameter {
  // Name of the attribute.
  name?: string;

  // Value is dynamic and changes at run-time.
  resourceValue?: string;

  // Value is static and does not change at run-time.
  staticValue?: string;

  // List of static values.
  staticValues?: Array<string>;
}

export function cfg_RemediationConfigurationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceValue",
      "Value is dynamic and changes at run-time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "staticValue",
      "Value is static and does not change at run-time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "staticValues",
      "List of static values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the attribute.",
      [],
      true,
      false,
    ),
  ];
}
