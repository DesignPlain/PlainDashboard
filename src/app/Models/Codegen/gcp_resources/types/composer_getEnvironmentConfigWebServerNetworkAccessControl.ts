import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange,
  composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes,
} from "./composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface composer_getEnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  allowedIpRanges?: Array<composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}

export function composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedIpRanges",
      "A collection of allowed IP ranges with descriptions.",
      composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes(),
      true,
      false,
    ),
  ];
}
