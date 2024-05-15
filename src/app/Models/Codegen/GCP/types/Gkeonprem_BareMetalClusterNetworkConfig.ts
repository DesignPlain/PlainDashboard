import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr,
  Gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr_GetTypes,
} from "./Gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr";
import {
  Gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig,
  Gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig";
import {
  Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig,
  Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig";

export interface Gkeonprem_BareMetalClusterNetworkConfig {
  /*
A nested object resource
Structure is documented below.
*/
  IslandModeCidr?: Gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr;

  /*
Configuration for multiple network interfaces.
Structure is documented below.
*/
  MultipleNetworkInterfacesConfig?: Gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig;

  /*
Configuration for SR-IOV.
Structure is documented below.
*/
  SrIovConfig?: Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig;

  /*
Enables the use of advanced Anthos networking features, such as Bundled
Load Balancing with BGP or the egress NAT gateway.
Setting configuration for advanced networking features will automatically
set this flag.
*/
  AdvancedNetworking?: boolean;
}

export function Gkeonprem_BareMetalClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IslandModeCidr",
      "A nested object resource\nStructure is documented below.",
      Gkeonprem_BareMetalClusterNetworkConfigIslandModeCidr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MultipleNetworkInterfacesConfig",
      "Configuration for multiple network interfaces.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SrIovConfig",
      "Configuration for SR-IOV.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AdvancedNetworking",
      "Enables the use of advanced Anthos networking features, such as Bundled\nLoad Balancing with BGP or the egress NAT gateway.\nSetting configuration for advanced networking features will automatically\nset this flag.",
      [],
      false,
      false,
    ),
  ];
}
