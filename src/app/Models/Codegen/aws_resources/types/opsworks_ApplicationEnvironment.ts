import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_ApplicationEnvironment {
  // Variable value.
  value?: string;

  // Variable name.
  key?: string;

  // Set visibility of the variable value to `true` or `false`.
  secure?: boolean;
}

export function opsworks_ApplicationEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Variable value.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Variable name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "secure",
      "Set visibility of the variable value to `true` or `false`.",
      [],
      false,
      false,
    ),
  ];
}
