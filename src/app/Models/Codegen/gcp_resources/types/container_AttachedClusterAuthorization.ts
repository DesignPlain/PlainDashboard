import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterAuthorization {
  /*
Groups that can perform operations as a cluster admin. A managed
ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole
to the groups. Up to ten admin groups can be provided.
For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
*/
  adminGroups?: Array<string>;

  /*
Users that can perform operations as a cluster admin. A managed
ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole
to the users. Up to ten admin users can be provided.
For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
*/
  adminUsers?: Array<string>;
}

export function container_AttachedClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "adminGroups",
      "Groups that can perform operations as a cluster admin. A managed\nClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole\nto the groups. Up to ten admin groups can be provided.\nFor more info on RBAC, see\nhttps://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "adminUsers",
      "Users that can perform operations as a cluster admin. A managed\nClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole\nto the users. Up to ten admin users can be provided.\nFor more info on RBAC, see\nhttps://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
