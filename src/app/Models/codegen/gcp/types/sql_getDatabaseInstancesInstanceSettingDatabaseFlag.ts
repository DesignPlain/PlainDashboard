import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstancesInstanceSettingDatabaseFlag {
  // Name of the flag.
  name?: string;

  // Value of the flag.
  value?: string;
}

export function sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the flag.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the flag.",
      () => [],
      true,
      false,
    ),
  ];
}
