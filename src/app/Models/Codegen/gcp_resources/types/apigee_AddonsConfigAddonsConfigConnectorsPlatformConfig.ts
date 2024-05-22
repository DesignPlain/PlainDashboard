import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig {
  // Flag that specifies whether the Advanced API Ops add-on is enabled.
  enabled?: boolean;

  /*
(Output)
Flag that specifies whether the Advanced API Ops add-on is enabled.
*/
  expiresAt?: string;
}

export function apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expiresAt",
      "(Output)\nFlag that specifies whether the Advanced API Ops add-on is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Flag that specifies whether the Advanced API Ops add-on is enabled.",
      [],
      false,
      false,
    ),
  ];
}
