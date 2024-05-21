import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork {
  //
  expirationTime?: string;

  // The name of the instance.
  name?: string;

  //
  value?: string;
}

export function sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "expirationTime", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
  ];
}
