import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization,
  gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization_GetTypes,
} from './gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization';

export interface gkeonprem_BareMetalAdminClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  authorization?: gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization;
}

export function gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'authorization',
      'Configures user access to the Bare Metal User cluster.\nStructure is documented below.',
      () =>
        gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization_GetTypes(),
      false,
      false,
    ),
  ];
}
