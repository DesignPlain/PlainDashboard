import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser,
  Gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser_GetTypes,
} from "./Gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser";

export interface Gkeonprem_BareMetalClusterSecurityConfigAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.
Structure is documented below.
*/
  AdminUsers?: Array<Gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser>;
}

export function Gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdminUsers",
      "Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
