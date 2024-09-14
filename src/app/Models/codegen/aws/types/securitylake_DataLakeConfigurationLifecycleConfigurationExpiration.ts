import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securitylake_DataLakeConfigurationLifecycleConfigurationExpiration {
  // Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.
  days?: number;
}

export function securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.",
      () => [],
      false,
      false,
    ),
  ];
}
