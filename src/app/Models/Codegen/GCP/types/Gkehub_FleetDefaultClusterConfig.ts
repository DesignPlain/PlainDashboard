import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig,
  Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes,
} from "./Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig";
import {
  Gkehub_FleetDefaultClusterConfigSecurityPostureConfig,
  Gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes,
} from "./Gkehub_FleetDefaultClusterConfigSecurityPostureConfig";

export interface Gkehub_FleetDefaultClusterConfig {
  /*
Enable/Disable binary authorization features for the cluster.
Structure is documented below.
*/
  BinaryAuthorizationConfig?: Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig;

  /*
Enable/Disable Security Posture features for the cluster.
Structure is documented below.
*/
  SecurityPostureConfig?: Gkehub_FleetDefaultClusterConfigSecurityPostureConfig;
}

export function Gkehub_FleetDefaultClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BinaryAuthorizationConfig",
      "Enable/Disable binary authorization features for the cluster.\nStructure is documented below.",
      Gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecurityPostureConfig",
      "Enable/Disable Security Posture features for the cluster.\nStructure is documented below.",
      Gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
