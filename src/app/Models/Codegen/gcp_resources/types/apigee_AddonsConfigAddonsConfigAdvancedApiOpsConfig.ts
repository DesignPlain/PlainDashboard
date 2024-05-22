import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig {
  // Flag that specifies whether the Advanced API Ops add-on is enabled.
  enabled?: boolean;
}

export function apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig_GetTypes(): DynamicUIProps[] {
  return [
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
