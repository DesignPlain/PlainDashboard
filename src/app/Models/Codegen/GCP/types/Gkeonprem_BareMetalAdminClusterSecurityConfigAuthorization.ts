import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorizationAdminUser,
  Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorizationAdminUser_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorizationAdminUser";

export interface Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.
Structure is documented below.
*/
  AdminUsers?: Array<Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorizationAdminUser>;
}

export function Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdminUsers",
      "Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
