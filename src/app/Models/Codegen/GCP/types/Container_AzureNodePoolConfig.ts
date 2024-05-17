import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AzureNodePoolConfigRootVolume,
  Container_AzureNodePoolConfigRootVolume_GetTypes,
} from "./Container_AzureNodePoolConfigRootVolume";
import {
  Container_AzureNodePoolConfigSshConfig,
  Container_AzureNodePoolConfigSshConfig_GetTypes,
} from "./Container_AzureNodePoolConfigSshConfig";
import {
  Container_AzureNodePoolConfigProxyConfig,
  Container_AzureNodePoolConfigProxyConfig_GetTypes,
} from "./Container_AzureNodePoolConfigProxyConfig";

export interface Container_AzureNodePoolConfig {
  // The OS image type to use on node pool instances.
  ImageType?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  Labels?: Map<string, string>;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: Container_AzureNodePoolConfigProxyConfig;

  // Optional. Configuration related to the root volume provisioned for each node pool machine. When unspecified, it defaults to a 32-GiB Azure Disk.
  RootVolume?: Container_AzureNodePoolConfigRootVolume;

  // SSH configuration for how to access the node pool machines.
  SshConfig?: Container_AzureNodePoolConfigSshConfig;

  // Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;

  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.
  VmSize?: string;
}

export function Container_AzureNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "VmSize",
      "Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The OS image type to use on node pool instances.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      'Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ProxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      Container_AzureNodePoolConfigProxyConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RootVolume",
      "Optional. Configuration related to the root volume provisioned for each node pool machine. When unspecified, it defaults to a 32-GiB Azure Disk.",
      Container_AzureNodePoolConfigRootVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshConfig",
      "SSH configuration for how to access the node pool machines.",
      Container_AzureNodePoolConfigSshConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Tags",
      "Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
