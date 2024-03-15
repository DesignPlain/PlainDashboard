import { VMwareClusterAuthorizationAdminUser } from "./VMwareClusterAuthorizationAdminUser";

export interface VMwareClusterAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing
full access to the cluster.
Structure is documented below.
*/
  AdminUsers?: Array<VMwareClusterAuthorizationAdminUser>;
}
