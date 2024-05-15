import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsClusterAuthorizationAdminUser,
  Container_AwsClusterAuthorizationAdminUser_GetTypes,
} from "./Container_AwsClusterAuthorizationAdminUser";
import {
  Container_AwsClusterAuthorizationAdminGroup,
  Container_AwsClusterAuthorizationAdminGroup_GetTypes,
} from "./Container_AwsClusterAuthorizationAdminGroup";

export interface Container_AwsClusterAuthorization {
  // Users to perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  AdminUsers?: Array<Container_AwsClusterAuthorizationAdminUser>;

  // Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  AdminGroups?: Array<Container_AwsClusterAuthorizationAdminGroup>;
}

export function Container_AwsClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdminUsers",
      "Users to perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the users. Up to ten admin users can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      Container_AwsClusterAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdminGroups",
      "Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole to the groups. Up to ten admin groups can be provided. For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
      Container_AwsClusterAuthorizationAdminGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
