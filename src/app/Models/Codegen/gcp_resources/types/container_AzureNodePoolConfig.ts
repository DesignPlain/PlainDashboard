import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AzureNodePoolConfigProxyConfig,
  container_AzureNodePoolConfigProxyConfig_GetTypes,
} from "./container_AzureNodePoolConfigProxyConfig";
import {
  container_AzureNodePoolConfigRootVolume,
  container_AzureNodePoolConfigRootVolume_GetTypes,
} from "./container_AzureNodePoolConfigRootVolume";
import {
  container_AzureNodePoolConfigSshConfig,
  container_AzureNodePoolConfigSshConfig_GetTypes,
} from "./container_AzureNodePoolConfigSshConfig";

export interface container_AzureNodePoolConfig {
  // The OS image type to use on node pool instances.
  imageType?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  labels?: Map<string, string>;

  // Proxy configuration for outbound HTTP(S) traffic.
  proxyConfig?: container_AzureNodePoolConfigProxyConfig;

  // Optional. Configuration related to the root volume provisioned for each node pool machine. When unspecified, it defaults to a 32-GiB Azure Disk.
  rootVolume?: container_AzureNodePoolConfigRootVolume;

  // SSH configuration for how to access the node pool machines.
  sshConfig?: container_AzureNodePoolConfigSshConfig;

  // Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  tags?: Map<string, string>;

  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.
  vmSize?: string;
}

export function container_AzureNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rootVolume",
      "Optional. Configuration related to the root volume provisioned for each node pool machine. When unspecified, it defaults to a 32-GiB Azure Disk.",
      container_AzureNodePoolConfigRootVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshConfig",
      "SSH configuration for how to access the node pool machines.",
      container_AzureNodePoolConfigSshConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "vmSize",
      "Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The OS image type to use on node pool instances.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      'Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "proxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      container_AzureNodePoolConfigProxyConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
