import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig,
  gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes,
} from "./gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig";
import {
  gkehub_FleetDefaultClusterConfigSecurityPostureConfig,
  gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes,
} from "./gkehub_FleetDefaultClusterConfigSecurityPostureConfig";

export interface gkehub_FleetDefaultClusterConfig {
  /*
Enable/Disable binary authorization features for the cluster.
Structure is documented below.
*/
  binaryAuthorizationConfig?: gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig;

  /*
Enable/Disable Security Posture features for the cluster.
Structure is documented below.
*/
  securityPostureConfig?: gkehub_FleetDefaultClusterConfigSecurityPostureConfig;
}

export function gkehub_FleetDefaultClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "binaryAuthorizationConfig",
      "Enable/Disable binary authorization features for the cluster.\nStructure is documented below.",
      gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "securityPostureConfig",
      "Enable/Disable Security Posture features for the cluster.\nStructure is documented below.",
      gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
