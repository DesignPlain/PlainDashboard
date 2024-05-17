import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterServiceExternalIpsConfig {
  // When enabled, services with exterenal ips specified will be allowed.
  Enabled?: boolean;
}

export function Container_getClusterServiceExternalIpsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "When enabled, services with exterenal ips specified will be allowed.",
      [],
      true,
      false,
    ),
  ];
}
