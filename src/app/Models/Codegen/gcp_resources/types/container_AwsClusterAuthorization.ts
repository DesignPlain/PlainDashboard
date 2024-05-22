import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AwsClusterAuthorizationAdminGroup,
  container_AwsClusterAuthorizationAdminGroup_GetTypes,
} from "./container_AwsClusterAuthorizationAdminGroup";
import {
  container_AwsClusterAuthorizationAdminUser,
  container_AwsClusterAuthorizationAdminUser_GetTypes,
} from "./container_AwsClusterAuthorizationAdminUser";

export interface container_AwsClusterAuthorization {
  // Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  adminGroups?: Array<container_AwsClusterAuthorizationAdminGroup>;

  // Users to perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  adminUsers?: Array<container_AwsClusterAuthorizationAdminUser>;
}

export function container_AwsClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "adminGroups",
      "Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      container_AwsClusterAuthorizationAdminGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "adminUsers",
      "Users to perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      container_AwsClusterAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
