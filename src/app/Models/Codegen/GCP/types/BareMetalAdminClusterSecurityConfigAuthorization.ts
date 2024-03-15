import { BareMetalAdminClusterSecurityConfigAuthorizationAdminUser } from "./BareMetalAdminClusterSecurityConfigAuthorizationAdminUser";

export interface BareMetalAdminClusterSecurityConfigAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.
Structure is documented below.
*/
  AdminUsers?: Array<BareMetalAdminClusterSecurityConfigAuthorizationAdminUser>;
}
