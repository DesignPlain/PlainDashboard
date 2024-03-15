import { AzureNodePoolConfigRootVolume } from "./AzureNodePoolConfigRootVolume";
import { AzureNodePoolConfigSshConfig } from "./AzureNodePoolConfigSshConfig";
import { AzureNodePoolConfigProxyConfig } from "./AzureNodePoolConfigProxyConfig";

export interface AzureNodePoolConfig {
  // Optional. Configuration related to the root volume provisioned for each node pool machine. When unspecified, it defaults to a 32-GiB Azure Disk.
  RootVolume?: AzureNodePoolConfigRootVolume;

  // SSH configuration for how to access the node pool machines.
  SshConfig?: AzureNodePoolConfigSshConfig;

  // Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;

  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.
  VmSize?: string;

  // The OS image type to use on node pool instances.
  ImageType?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  Labels?: Map<string, string>;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: AzureNodePoolConfigProxyConfig;
}
