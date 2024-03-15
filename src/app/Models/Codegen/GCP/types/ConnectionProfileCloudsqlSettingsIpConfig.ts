import { ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork } from "./ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork";

export interface ConnectionProfileCloudsqlSettingsIpConfig {
  /*
The list of external networks that are allowed to connect to the instance using the IP.
Structure is documented below.
*/
  AuthorizedNetworks?: Array<ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork>;

  // Whether the instance should be assigned an IPv4 address or not.
  EnableIpv4?: boolean;

  /*
The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.
*/
  PrivateNetwork?: string;

  // Whether SSL connections over IP should be enforced or not.
  RequireSsl?: boolean;
}
