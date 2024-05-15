import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork {
  //
  ExpirationTime?: string;

  //
  Name?: string;

  //
  Value?: string;
}

export function Sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ExpirationTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "Name", "", [], true, false),
    new DynamicUIProps(InputType.String, "Value", "", [], true, false),
  ];
}
