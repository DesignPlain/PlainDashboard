import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_UserPoolAccountRecoverySettingRecoveryMechanism {
  // Positive integer specifying priority of a method with 1 being the highest priority.
  priority?: number;

  // Recovery method for a user. Can be of the following: `verified_email`, `verified_phone_number`, and `admin_only`.
  name?: string;
}

export function cognito_UserPoolAccountRecoverySettingRecoveryMechanism_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Positive integer specifying priority of a method with 1 being the highest priority.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Recovery method for a user. Can be of the following: `verified_email`, `verified_phone_number`, and `admin_only`.",
      () => [],
      true,
      false,
    ),
  ];
}
