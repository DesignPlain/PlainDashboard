import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterServiceExternalIpsConfig {
  // Controls whether external ips specified by a service will be allowed. It is enabled by default.
  Enabled?: boolean;
}

export function Container_ClusterServiceExternalIpsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Controls whether external ips specified by a service will be allowed. It is enabled by default.",
      [],
      true,
      false,
    ),
  ];
}
