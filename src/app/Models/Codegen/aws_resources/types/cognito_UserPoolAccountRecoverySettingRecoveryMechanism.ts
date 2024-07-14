import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_UserPoolAccountRecoverySettingRecoveryMechanism {
  /*
Name of the user pool.

The following arguments are optional:
*/
  name?: string;

  // Positive integer specifying priority of a method with 1 being the highest priority.
  priority?: number;
}

export function cognito_UserPoolAccountRecoverySettingRecoveryMechanism_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the user pool.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Positive integer specifying priority of a method with 1 being the highest priority.",
      [],
      true,
      false,
    ),
  ];
}
