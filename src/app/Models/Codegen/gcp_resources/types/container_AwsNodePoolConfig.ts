import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AwsNodePoolConfigSpotConfig,
  container_AwsNodePoolConfigSpotConfig_GetTypes,
} from "./container_AwsNodePoolConfigSpotConfig";
import {
  container_AwsNodePoolConfigProxyConfig,
  container_AwsNodePoolConfigProxyConfig_GetTypes,
} from "./container_AwsNodePoolConfigProxyConfig";
import {
  container_AwsNodePoolConfigRootVolume,
  container_AwsNodePoolConfigRootVolume_GetTypes,
} from "./container_AwsNodePoolConfigRootVolume";
import {
  container_AwsNodePoolConfigSshConfig,
  container_AwsNodePoolConfigSshConfig_GetTypes,
} from "./container_AwsNodePoolConfigSshConfig";
import {
  container_AwsNodePoolConfigTaint,
  container_AwsNodePoolConfigTaint_GetTypes,
} from "./container_AwsNodePoolConfigTaint";
import {
  container_AwsNodePoolConfigAutoscalingMetricsCollection,
  container_AwsNodePoolConfigAutoscalingMetricsCollection_GetTypes,
} from "./container_AwsNodePoolConfigAutoscalingMetricsCollection";
import {
  container_AwsNodePoolConfigConfigEncryption,
  container_AwsNodePoolConfigConfigEncryption_GetTypes,
} from "./container_AwsNodePoolConfigConfigEncryption";
import {
  container_AwsNodePoolConfigInstancePlacement,
  container_AwsNodePoolConfigInstancePlacement_GetTypes,
} from "./container_AwsNodePoolConfigInstancePlacement";

export interface container_AwsNodePoolConfig {
  // Optional. When specified, the node pool will provision Spot instances from the set of spot_config.instance_types. This field is mutually exclusive with `instance_type`
  spotConfig?: container_AwsNodePoolConfigSpotConfig;

  // Proxy configuration for outbound HTTP(S) traffic.
  proxyConfig?: container_AwsNodePoolConfigProxyConfig;

  // Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.
  securityGroupIds?: Array<string>;

  // The OS image type to use on node pool instances.
  imageType?: string;

  // Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  rootVolume?: container_AwsNodePoolConfigRootVolume;

  // Optional. The SSH configuration.
  sshConfig?: container_AwsNodePoolConfigSshConfig;

  // Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  tags?: Map<string, string>;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  instanceType?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  labels?: Map<string, string>;

  // Optional. The initial taints assigned to nodes of this node pool.
  taints?: Array<container_AwsNodePoolConfigTaint>;

  // Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool. When unspecified, metrics collection is disabled.
  autoscalingMetricsCollection?: container_AwsNodePoolConfigAutoscalingMetricsCollection;

  // The ARN of the AWS KMS key used to encrypt node pool configuration.
  configEncryption?: container_AwsNodePoolConfigConfigEncryption;

  // The name of the AWS IAM role assigned to nodes in the pool.
  iamInstanceProfile?: string;

  // Details of placement information for an instance.
  instancePlacement?: container_AwsNodePoolConfigInstancePlacement;
}

export function container_AwsNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      'Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instancePlacement",
      "Details of placement information for an instance.",
      container_AwsNodePoolConfigInstancePlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spotConfig",
      "Optional. When specified, the node pool will provision Spot instances from the set of spot_config.instance_types. This field is mutually exclusive with `instance_type`",
      container_AwsNodePoolConfigSpotConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rootVolume",
      "Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.",
      container_AwsNodePoolConfigRootVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshConfig",
      "Optional. The SSH configuration.",
      container_AwsNodePoolConfigSshConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "Optional. The initial taints assigned to nodes of this node pool.",
      container_AwsNodePoolConfigTaint_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscalingMetricsCollection",
      "Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool. When unspecified, metrics collection is disabled.",
      container_AwsNodePoolConfigAutoscalingMetricsCollection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iamInstanceProfile",
      "The name of the AWS IAM role assigned to nodes in the pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "proxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      container_AwsNodePoolConfigProxyConfig_GetTypes(),
      false,
      false,
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
      InputType.String,
      "instanceType",
      "Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configEncryption",
      "The ARN of the AWS KMS key used to encrypt node pool configuration.",
      container_AwsNodePoolConfigConfigEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
