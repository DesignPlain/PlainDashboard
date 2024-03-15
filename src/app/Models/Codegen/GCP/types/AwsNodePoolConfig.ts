import { AwsNodePoolConfigSshConfig } from "./AwsNodePoolConfigSshConfig";
import { AwsNodePoolConfigInstancePlacement } from "./AwsNodePoolConfigInstancePlacement";
import { AwsNodePoolConfigConfigEncryption } from "./AwsNodePoolConfigConfigEncryption";
import { AwsNodePoolConfigSpotConfig } from "./AwsNodePoolConfigSpotConfig";
import { AwsNodePoolConfigAutoscalingMetricsCollection } from "./AwsNodePoolConfigAutoscalingMetricsCollection";
import { AwsNodePoolConfigRootVolume } from "./AwsNodePoolConfigRootVolume";
import { AwsNodePoolConfigTaint } from "./AwsNodePoolConfigTaint";
import { AwsNodePoolConfigProxyConfig } from "./AwsNodePoolConfigProxyConfig";

export interface AwsNodePoolConfig {
  // Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.
  SecurityGroupIds?: Array<string>;

  // Optional. When specified, the node pool will provision Spot instances from the set of spot_config.instance_types. This field is mutually exclusive with `instance_type`
  SpotConfig?: AwsNodePoolConfigSpotConfig;

  // Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool. When unspecified, metrics collection is disabled.
  AutoscalingMetricsCollection?: AwsNodePoolConfigAutoscalingMetricsCollection;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  InstanceType?: string;

  // Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  RootVolume?: AwsNodePoolConfigRootVolume;

  // The name of the AWS IAM role assigned to nodes in the pool.
  IamInstanceProfile?: string;

  // Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  Labels?: Map<string, string>;

  // Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;

  // Optional. The initial taints assigned to nodes of this node pool.
  Taints?: Array<AwsNodePoolConfigTaint>;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: AwsNodePoolConfigProxyConfig;

  // Optional. The SSH configuration.
  SshConfig?: AwsNodePoolConfigSshConfig;

  // Details of placement information for an instance.
  InstancePlacement?: AwsNodePoolConfigInstancePlacement;

  // The ARN of the AWS KMS key used to encrypt node pool configuration.
  ConfigEncryption?: AwsNodePoolConfigConfigEncryption;

  // The OS image type to use on node pool instances.
  ImageType?: string;
}
