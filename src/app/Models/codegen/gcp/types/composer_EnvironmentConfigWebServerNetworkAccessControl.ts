import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange,
  composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes,
} from "./composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface composer_EnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  allowedIpRanges?: Array<composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}

export function composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedIpRanges",
      "A collection of allowed IP ranges with descriptions.",
      () =>
        composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes(),
      false,
      false,
    ),
  ];
}
