export interface AttachedClusterAuthorization {
  /*
Groups that can perform operations as a cluster admin. A managed
ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole
to the groups. Up to ten admin groups can be provided.
For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
*/
  AdminGroups?: Array<string>;

  /*
Users that can perform operations as a cluster admin. A managed
ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole
to the users. Up to ten admin users can be provided.
For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
*/
  AdminUsers?: Array<string>;
}
