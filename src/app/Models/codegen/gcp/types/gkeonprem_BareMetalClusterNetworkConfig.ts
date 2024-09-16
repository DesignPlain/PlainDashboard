import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr,
  gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr_GetTypes,
} from './gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr';
import {
  gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig,
  gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig_GetTypes,
} from './gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig';
import {
  gkeonprem_BareMetalClusterNetworkConfigSrIovConfig,
  gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes,
} from './gkeonprem_BareMetalClusterNetworkConfigSrIovConfig';

export interface gkeonprem_BareMetalClusterNetworkConfig {
  /*
Enables the use of advanced Anthos networking features, such as Bundled
Load Balancing with BGP or the egress NAT gateway.
Setting configuration for advanced networking features will automatically
set this flag.
*/
  advancedNetworking?: boolean;

  /*
A nested object resource
Structure is documented below.
*/
  islandModeCidr?: gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr;

  /*
Configuration for multiple network interfaces.
Structure is documented below.
*/
  multipleNetworkInterfacesConfig?: gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig;

  /*
Configuration for SR-IOV.
Structure is documented below.
*/
  srIovConfig?: gkeonprem_BareMetalClusterNetworkConfigSrIovConfig;
}

export function gkeonprem_BareMetalClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'advancedNetworking',
      'Enables the use of advanced Anthos networking features, such as Bundled\nLoad Balancing with BGP or the egress NAT gateway.\nSetting configuration for advanced networking features will automatically\nset this flag.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'islandModeCidr',
      'A nested object resource\nStructure is documented below.',
      () => gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'multipleNetworkInterfacesConfig',
      'Configuration for multiple network interfaces.\nStructure is documented below.',
      () =>
        gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'srIovConfig',
      'Configuration for SR-IOV.\nStructure is documented below.',
      () => gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
