import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_MysqlLayerEbsVolume,
  opsworks_MysqlLayerEbsVolume_GetTypes,
} from "../types/opsworks_MysqlLayerEbsVolume";
import {
  opsworks_MysqlLayerCloudwatchConfiguration,
  opsworks_MysqlLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_MysqlLayerCloudwatchConfiguration";
import {
  opsworks_MysqlLayerLoadBasedAutoScaling,
  opsworks_MysqlLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_MysqlLayerLoadBasedAutoScaling";

export interface MysqlLayerArgs {
  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_MysqlLayerEbsVolume>;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  //
  cloudwatchConfiguration?: opsworks_MysqlLayerCloudwatchConfiguration;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customShutdownRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // A human-readable name for the layer.
  name?: string;

  // Whether to set the root user password to all instances in the stack so they can access the instances in this layer.
  rootPasswordOnAllInstances?: boolean;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  //
  customDeployRecipes?: Array<string>;

  //
  customSetupRecipes?: Array<string>;

  //
  customUndeployRecipes?: Array<string>;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  //
  loadBasedAutoScaling?: opsworks_MysqlLayerLoadBasedAutoScaling;

  // Root password to use for MySQL.
  rootPassword?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  //
  customConfigureRecipes?: Array<string>;
}
export class MysqlLayer extends DS_Resource {
  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  //
  public loadBasedAutoScaling?: opsworks_MysqlLayerLoadBasedAutoScaling;

  // Root password to use for MySQL.
  public rootPassword?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  //
  public customShutdownRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  // Whether to set the root user password to all instances in the stack so they can access the instances in this layer.
  public rootPasswordOnAllInstances?: boolean;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  //
  public customConfigureRecipes?: Array<string>;

  //
  public customUndeployRecipes?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_MysqlLayerEbsVolume>;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  //
  public customDeployRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  //
  public customSetupRecipes?: Array<string>;

  // A human-readable name for the layer.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public cloudwatchConfiguration?: opsworks_MysqlLayerCloudwatchConfiguration;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "customConfigureRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customInstanceProfileArn",
        "The ARN of an IAM profile that will be used for the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customShutdownRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "elasticLoadBalancer",
        "Name of an Elastic Load Balancer to attach to this layer",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A human-readable name for the layer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customSetupRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "drainElbOnShutdown",
        "Whether to enable Elastic Load Balancing connection draining.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        () => opsworks_MysqlLayerEbsVolume_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "rootPasswordOnAllInstances",
        "Whether to set the root user password to all instances in the stack so they can access the instances in this layer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoHealing",
        "Whether to enable auto-healing for the layer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAssignPublicIps",
        "For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customDeployRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rootPassword",
        "Root password to use for MySQL.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "installUpdatesOnBoot",
        "Whether to install OS and package updates on each instance when it boots.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useEbsOptimizedInstances",
        "Whether to use EBS-optimized instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "ID of the stack the layer will belong to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        () => opsworks_MysqlLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the layer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customUndeployRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "instanceShutdownTimeout",
        "The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        () => opsworks_MysqlLayerLoadBasedAutoScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAssignElasticIps",
        "Whether to automatically assign an elastic IP address to the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "systemPackages",
        "Names of a set of system packages to install on the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
