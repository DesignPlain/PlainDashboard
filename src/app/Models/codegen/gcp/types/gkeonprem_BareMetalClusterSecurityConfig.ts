import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterSecurityConfigAuthorization,
  gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes,
} from './gkeonprem_BareMetalClusterSecurityConfigAuthorization';

export interface gkeonprem_BareMetalClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  authorization?: gkeonprem_BareMetalClusterSecurityConfigAuthorization;
}

export function gkeonprem_BareMetalClusterSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'authorization',
      'Configures user access to the Bare Metal User cluster.\nStructure is documented below.',
      () => gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes(),
      false,
      false,
    ),
  ];
}
