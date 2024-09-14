import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterServiceExternalIpsConfig {
  // When enabled, services with exterenal ips specified will be allowed.
  enabled?: boolean;
}

export function container_getClusterServiceExternalIpsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "When enabled, services with exterenal ips specified will be allowed.",
      () => [],
      true,
      false,
    ),
  ];
}
