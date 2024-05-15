import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingDatabaseFlag {
  // Name of the flag.
  Name?: string;

  // Value of the flag.
  Value?: string;
}

export function Sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the flag.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value of the flag.",
      [],
      true,
      false,
    ),
  ];
}
