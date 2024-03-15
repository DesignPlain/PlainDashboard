import { FleetDefaultClusterConfigSecurityPostureConfig } from "./FleetDefaultClusterConfigSecurityPostureConfig";
import { FleetDefaultClusterConfigBinaryAuthorizationConfig } from "./FleetDefaultClusterConfigBinaryAuthorizationConfig";

export interface FleetDefaultClusterConfig {
  /*
Enable/Disable Security Posture features for the cluster.
Structure is documented below.
*/
  SecurityPostureConfig?: FleetDefaultClusterConfigSecurityPostureConfig;

  /*
Enable/Disable binary authorization features for the cluster.
Structure is documented below.
*/
  BinaryAuthorizationConfig?: FleetDefaultClusterConfigBinaryAuthorizationConfig;
}
