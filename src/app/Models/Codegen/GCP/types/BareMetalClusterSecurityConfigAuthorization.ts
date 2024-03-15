import { BareMetalClusterSecurityConfigAuthorizationAdminUser } from "./BareMetalClusterSecurityConfigAuthorizationAdminUser";

export interface BareMetalClusterSecurityConfigAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.
Structure is documented below.
*/
  AdminUsers?: Array<BareMetalClusterSecurityConfigAuthorizationAdminUser>;
}
