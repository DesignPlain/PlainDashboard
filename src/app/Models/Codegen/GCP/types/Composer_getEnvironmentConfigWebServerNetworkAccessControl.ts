import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange,
  Composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes,
} from "./Composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface Composer_getEnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  AllowedIpRanges?: Array<Composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}

export function Composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedIpRanges",
      "A collection of allowed IP ranges with descriptions.",
      Composer_getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes(),
      true,
      false,
    ),
  ];
}
