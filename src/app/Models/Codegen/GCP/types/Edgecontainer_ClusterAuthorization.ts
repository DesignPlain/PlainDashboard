import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterAuthorizationAdminUsers,
  Edgecontainer_ClusterAuthorizationAdminUsers_GetTypes,
} from "./Edgecontainer_ClusterAuthorizationAdminUsers";

export interface Edgecontainer_ClusterAuthorization {
  /*
User that will be granted the cluster-admin role on the cluster, providing
full access to the cluster. Currently, this is a singular field, but will
be expanded to allow multiple admins in the future.
Structure is documented below.
*/
  AdminUsers?: Edgecontainer_ClusterAuthorizationAdminUsers;
}

export function Edgecontainer_ClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AdminUsers",
      "User that will be granted the cluster-admin role on the cluster, providing\nfull access to the cluster. Currently, this is a singular field, but will\nbe expanded to allow multiple admins in the future.\nStructure is documented below.",
      Edgecontainer_ClusterAuthorizationAdminUsers_GetTypes(),
      true,
      false,
    ),
  ];
}
