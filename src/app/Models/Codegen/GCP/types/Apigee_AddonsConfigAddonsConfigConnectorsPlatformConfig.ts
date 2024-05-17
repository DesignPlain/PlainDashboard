import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig {
  // Flag that specifies whether the Advanced API Ops add-on is enabled.
  Enabled?: boolean;

  /*
(Output)
Flag that specifies whether the Advanced API Ops add-on is enabled.
*/
  ExpiresAt?: string;
}

export function Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Flag that specifies whether the Advanced API Ops add-on is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpiresAt",
      "(Output)\nFlag that specifies whether the Advanced API Ops add-on is enabled.",
      [],
      false,
      false,
    ),
  ];
}
