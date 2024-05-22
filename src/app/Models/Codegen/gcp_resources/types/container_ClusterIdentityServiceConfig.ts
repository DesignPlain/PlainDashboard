import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterIdentityServiceConfig {
  // Whether to enable the Identity Service component. It is disabled by default. Set `enabled=true` to enable.
  enabled?: boolean;
}

export function container_ClusterIdentityServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether to enable the Identity Service component. It is disabled by default. Set `enabled=true` to enable.",
      [],
      false,
      false,
    ),
  ];
}
