import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AzureClusterAuthorizationAdminGroup,
  Container_AzureClusterAuthorizationAdminGroup_GetTypes,
} from "./Container_AzureClusterAuthorizationAdminGroup";
import {
  Container_AzureClusterAuthorizationAdminUser,
  Container_AzureClusterAuthorizationAdminUser_GetTypes,
} from "./Container_AzureClusterAuthorizationAdminUser";

export interface Container_AzureClusterAuthorization {
  // Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  AdminGroups?: Array<Container_AzureClusterAuthorizationAdminGroup>;

  // Users that can perform operations as a cluster admin. A new ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  AdminUsers?: Array<Container_AzureClusterAuthorizationAdminUser>;
}

export function Container_AzureClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdminGroups",
      "Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      Container_AzureClusterAuthorizationAdminGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdminUsers",
      "Users that can perform operations as a cluster admin. A new ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      Container_AzureClusterAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
