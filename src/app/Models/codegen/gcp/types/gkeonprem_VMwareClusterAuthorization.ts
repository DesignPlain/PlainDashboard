import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_VMwareClusterAuthorizationAdminUser,
  gkeonprem_VMwareClusterAuthorizationAdminUser_GetTypes,
} from './gkeonprem_VMwareClusterAuthorizationAdminUser';

export interface gkeonprem_VMwareClusterAuthorization {
  /*
Users that will be granted the cluster-admin role on the cluster, providing
full access to the cluster.
Structure is documented below.
*/
  adminUsers?: Array<gkeonprem_VMwareClusterAuthorizationAdminUser>;
}

export function gkeonprem_VMwareClusterAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'adminUsers',
      'Users that will be granted the cluster-admin role on the cluster, providing\nfull access to the cluster.\nStructure is documented below.',
      () => gkeonprem_VMwareClusterAuthorizationAdminUser_GetTypes(),
      false,
      false,
    ),
  ];
}
