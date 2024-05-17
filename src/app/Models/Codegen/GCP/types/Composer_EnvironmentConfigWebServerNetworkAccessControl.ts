import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange,
  Composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes,
} from "./Composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface Composer_EnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  AllowedIpRanges?: Array<Composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}

export function Composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedIpRanges",
      "A collection of allowed IP ranges with descriptions.",
      Composer_EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange_GetTypes(),
      false,
      false,
    ),
  ];
}
