import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config,
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config";
import {
  Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig,
  Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig";
import {
  Gkeonprem_VMwareClusterNetworkConfigHostConfig,
  Gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigHostConfig";
import {
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig,
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig";

export interface Gkeonprem_VMwareClusterNetworkConfig {
  /*
All services in the cluster are assigned an RFC1918 IPv4 address
from these ranges. Only a single range is supported.. This field
cannot be changed after creation.
*/
  ServiceAddressCidrBlocks?: Array<string>;

  /*
Configuration settings for a static IP configuration.
Structure is documented below.
*/
  StaticIpConfig?: Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig;

  /*
(Output)
vcenter_network specifies vCenter network name. Inherited from the admin cluster.
*/
  VcenterNetwork?: string;

  /*
Configuration for control plane V2 mode.
Structure is documented below.
*/
  ControlPlaneV2Config?: Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config;

  /*
Configuration settings for a DHCP IP configuration.
Structure is documented below.
*/
  DhcpIpConfig?: Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig;

  /*
Represents common network settings irrespective of the host's IP address.
Structure is documented below.
*/
  HostConfig?: Gkeonprem_VMwareClusterNetworkConfigHostConfig;

  /*
All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
Only a single range is supported. This field cannot be changed after creation.
*/
  PodAddressCidrBlocks?: Array<string>;
}

export function Gkeonprem_VMwareClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HostConfig",
      "Represents common network settings irrespective of the host's IP address.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PodAddressCidrBlocks",
      "All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.\nOnly a single range is supported. This field cannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServiceAddressCidrBlocks",
      "All services in the cluster are assigned an RFC1918 IPv4 address\nfrom these ranges. Only a single range is supported.. This field\ncannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StaticIpConfig",
      "Configuration settings for a static IP configuration.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VcenterNetwork",
      "(Output)\nvcenter_network specifies vCenter network name. Inherited from the admin cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ControlPlaneV2Config",
      "Configuration for control plane V2 mode.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DhcpIpConfig",
      "Configuration settings for a DHCP IP configuration.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
