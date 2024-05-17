import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork {
  // The name of the instance.
  Name?: string;

  //
  Value?: string;

  //
  ExpirationTime?: string;
}

export function Sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ExpirationTime", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Value", "", [], true, false),
  ];
}
