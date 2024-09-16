import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AzureClusterAuthorizationAdminUser,
  container_AzureClusterAuthorizationAdminUser_GetTypes,
} from './container_AzureClusterAuthorizationAdminUser';
import {
  container_AzureClusterAuthorizationAdminGroup,
  container_AzureClusterAuthorizationAdminGroup_GetTypes,
} from './container_AzureClusterAuthorizationAdminGroup';

export interface container_AzureClusterAuthorization {
  // Users that can perform operations as a cluster admin. A new ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  adminUsers?: Array<container_AzureClusterAuthorizationAdminUser>;

  // Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  adminGroups?: Array<container_AzureClusterAuthorizationAdminGroup>;
}

export function container_AzureClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'adminGroups',
      'Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles',
      () => container_AzureClusterAuthorizationAdminGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'adminUsers',
      'Users that can perform operations as a cluster admin. A new ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles',
      () => container_AzureClusterAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
