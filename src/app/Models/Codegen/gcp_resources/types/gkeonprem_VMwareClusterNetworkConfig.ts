import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_VMwareClusterNetworkConfigHostConfig,
  gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigHostConfig";
import {
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfig,
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigStaticIpConfig";
import {
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config,
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config";
import {
  gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig,
  gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig";

export interface gkeonprem_VMwareClusterNetworkConfig {
  /*
All services in the cluster are assigned an RFC1918 IPv4 address
from these ranges. Only a single range is supported.. This field
cannot be changed after creation.
*/
  serviceAddressCidrBlocks?: Array<string>;

  /*
Configuration settings for a static IP configuration.
Structure is documented below.
*/
  staticIpConfig?: gkeonprem_VMwareClusterNetworkConfigStaticIpConfig;

  /*
(Output)
vcenter_network specifies vCenter network name. Inherited from the admin cluster.
*/
  vcenterNetwork?: string;

  /*
Configuration for control plane V2 mode.
Structure is documented below.
*/
  controlPlaneV2Config?: gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config;

  /*
Configuration settings for a DHCP IP configuration.
Structure is documented below.
*/
  dhcpIpConfig?: gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig;

  /*
Represents common network settings irrespective of the host's IP address.
Structure is documented below.
*/
  hostConfig?: gkeonprem_VMwareClusterNetworkConfigHostConfig;

  /*
All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
Only a single range is supported. This field cannot be changed after creation.
*/
  podAddressCidrBlocks?: Array<string>;
}

export function gkeonprem_VMwareClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "podAddressCidrBlocks",
      "All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.\nOnly a single range is supported. This field cannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceAddressCidrBlocks",
      "All services in the cluster are assigned an RFC1918 IPv4 address\nfrom these ranges. Only a single range is supported.. This field\ncannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "staticIpConfig",
      "Configuration settings for a static IP configuration.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vcenterNetwork",
      "(Output)\nvcenter_network specifies vCenter network name. Inherited from the admin cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "controlPlaneV2Config",
      "Configuration for control plane V2 mode.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dhcpIpConfig",
      "Configuration settings for a DHCP IP configuration.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostConfig",
      "Represents common network settings irrespective of the host's IP address.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
