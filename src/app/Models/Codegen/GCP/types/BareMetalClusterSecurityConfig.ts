import { BareMetalClusterSecurityConfigAuthorization } from "./BareMetalClusterSecurityConfigAuthorization";

export interface BareMetalClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  Authorization?: BareMetalClusterSecurityConfigAuthorization;
}
