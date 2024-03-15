import { getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange } from "./getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange";

export interface getEnvironmentConfigWebServerNetworkAccessControl {
  // A collection of allowed IP ranges with descriptions.
  AllowedIpRanges?: Array<getEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>;
}
