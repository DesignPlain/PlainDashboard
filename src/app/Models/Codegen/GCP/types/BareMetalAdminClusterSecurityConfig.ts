import { BareMetalAdminClusterSecurityConfigAuthorization } from "./BareMetalAdminClusterSecurityConfigAuthorization";

export interface BareMetalAdminClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  Authorization?: BareMetalAdminClusterSecurityConfigAuthorization;
}
