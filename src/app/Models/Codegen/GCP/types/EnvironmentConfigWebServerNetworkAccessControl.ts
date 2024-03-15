import { EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange } from "./EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface EnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  AllowedIpRanges?: Array<EnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}
