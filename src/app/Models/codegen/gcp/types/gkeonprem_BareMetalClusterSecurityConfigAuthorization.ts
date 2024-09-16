import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser,
  gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser_GetTypes,
} from './gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser';

export interface gkeonprem_BareMetalClusterSecurityConfigAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.
Structure is documented below.
*/
  adminUsers?: Array<gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser>;
}

export function gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'adminUsers',
      'Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.\nStructure is documented below.',
      () =>
        gkeonprem_BareMetalClusterSecurityConfigAuthorizationAdminUser_GetTypes(),
      true,
      false,
    ),
  ];
}
