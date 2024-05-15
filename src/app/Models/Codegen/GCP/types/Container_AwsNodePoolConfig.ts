import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsNodePoolConfigSshConfig,
  Container_AwsNodePoolConfigSshConfig_GetTypes,
} from "./Container_AwsNodePoolConfigSshConfig";
import {
  Container_AwsNodePoolConfigAutoscalingMetricsCollection,
  Container_AwsNodePoolConfigAutoscalingMetricsCollection_GetTypes,
} from "./Container_AwsNodePoolConfigAutoscalingMetricsCollection";
import {
  Container_AwsNodePoolConfigTaint,
  Container_AwsNodePoolConfigTaint_GetTypes,
} from "./Container_AwsNodePoolConfigTaint";
import {
  Container_AwsNodePoolConfigConfigEncryption,
  Container_AwsNodePoolConfigConfigEncryption_GetTypes,
} from "./Container_AwsNodePoolConfigConfigEncryption";
import {
  Container_AwsNodePoolConfigSpotConfig,
  Container_AwsNodePoolConfigSpotConfig_GetTypes,
} from "./Container_AwsNodePoolConfigSpotConfig";
import {
  Container_AwsNodePoolConfigInstancePlacement,
  Container_AwsNodePoolConfigInstancePlacement_GetTypes,
} from "./Container_AwsNodePoolConfigInstancePlacement";
import {
  Container_AwsNodePoolConfigProxyConfig,
  Container_AwsNodePoolConfigProxyConfig_GetTypes,
} from "./Container_AwsNodePoolConfigProxyConfig";
import {
  Container_AwsNodePoolConfigRootVolume,
  Container_AwsNodePoolConfigRootVolume_GetTypes,
} from "./Container_AwsNodePoolConfigRootVolume";

export interface Container_AwsNodePoolConfig {
  // The name of the AWS IAM role assigned to nodes in the pool.
  IamInstanceProfile?: string;

  // The OS image type to use on node pool instances.
  ImageType?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  Labels?: Map<string, string>;

  // Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.
  SecurityGroupIds?: Array<string>;

  // Details of placement information for an instance.
  InstancePlacement?: Container_AwsNodePoolConfigInstancePlacement;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: Container_AwsNodePoolConfigProxyConfig;

  // Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  RootVolume?: Container_AwsNodePoolConfigRootVolume;

  // Optional. The SSH configuration.
  SshConfig?: Container_AwsNodePoolConfigSshConfig;

  // Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool. When unspecified, metrics collection is disabled.
  AutoscalingMetricsCollection?: Container_AwsNodePoolConfigAutoscalingMetricsCollection;

  // Optional. The initial taints assigned to nodes of this node pool.
  Taints?: Array<Container_AwsNodePoolConfigTaint>;

  // The ARN of the AWS KMS key used to encrypt node pool configuration.
  ConfigEncryption?: Container_AwsNodePoolConfigConfigEncryption;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  InstanceType?: string;

  // Optional. When specified, the node pool will provision Spot instances from the set of spot_config.instance_types. This field is mutually exclusive with `instance_type`
  SpotConfig?: Container_AwsNodePoolConfigSpotConfig;

  // Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;
}

export function Container_AwsNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      'Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ProxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      Container_AwsNodePoolConfigProxyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AutoscalingMetricsCollection",
      "Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool. When unspecified, metrics collection is disabled.",
      Container_AwsNodePoolConfigAutoscalingMetricsCollection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Tags",
      "Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecurityGroupIds",
      "Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SpotConfig",
      "Optional. When specified, the node pool will provision Spot instances from the set of spot_config.instance_types. This field is mutually exclusive with `instance_type`",
      Container_AwsNodePoolConfigSpotConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RootVolume",
      "Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.",
      Container_AwsNodePoolConfigRootVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshConfig",
      "Optional. The SSH configuration.",
      Container_AwsNodePoolConfigSshConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceType",
      "Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IamInstanceProfile",
      "The name of the AWS IAM role assigned to nodes in the pool.",
      [],
      true,
      false,
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
      InputType.Object,
      "InstancePlacement",
      "Details of placement information for an instance.",
      Container_AwsNodePoolConfigInstancePlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Taints",
      "Optional. The initial taints assigned to nodes of this node pool.",
      Container_AwsNodePoolConfigTaint_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfigEncryption",
      "The ARN of the AWS KMS key used to encrypt node pool configuration.",
      Container_AwsNodePoolConfigConfigEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
