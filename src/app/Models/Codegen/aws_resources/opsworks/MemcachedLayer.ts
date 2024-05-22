import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_MemcachedLayerEbsVolume,
  opsworks_MemcachedLayerEbsVolume_GetTypes,
} from "../types/opsworks_MemcachedLayerEbsVolume";
import {
  opsworks_MemcachedLayerCloudwatchConfiguration,
  opsworks_MemcachedLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_MemcachedLayerCloudwatchConfiguration";
import {
  opsworks_MemcachedLayerLoadBasedAutoScaling,
  opsworks_MemcachedLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_MemcachedLayerLoadBasedAutoScaling";

export interface MemcachedLayerArgs {
  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  //
  cloudwatchConfiguration?: opsworks_MemcachedLayerCloudwatchConfiguration;

  //
  customDeployRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customSetupRecipes?: Array<string>;

  //
  customShutdownRecipes?: Array<string>;

  //
  loadBasedAutoScaling?: opsworks_MemcachedLayerLoadBasedAutoScaling;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  // A human-readable name for the layer.
  name?: string;

  //
  customConfigureRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_MemcachedLayerEbsVolume>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // Amount of memory to allocate for the cache on each instance, in megabytes. Defaults to 512MB.
  allocatedMemory?: number;

  //
  customUndeployRecipes?: Array<string>;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;
}
export class MemcachedLayer extends Resource {
  //
  public customDeployRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  //
  public customUndeployRecipes?: Array<string>;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  // Amount of memory to allocate for the cache on each instance, in megabytes. Defaults to 512MB.
  public allocatedMemory?: number;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  //
  public cloudwatchConfiguration?: opsworks_MemcachedLayerCloudwatchConfiguration;

  //
  public customShutdownRecipes?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  //
  public customConfigureRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_MemcachedLayerEbsVolume>;

  // A human-readable name for the layer.
  public name?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  //
  public customSetupRecipes?: Array<string>;

  //
  public loadBasedAutoScaling?: opsworks_MemcachedLayerLoadBasedAutoScaling;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "autoHealing",
        "Whether to enable auto-healing for the layer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        opsworks_MemcachedLayerLoadBasedAutoScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocatedMemory",
        "Amount of memory to allocate for the cache on each instance, in megabytes. Defaults to 512MB.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customUndeployRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "installUpdatesOnBoot",
        "Whether to install OS and package updates on each instance when it boots.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A human-readable name for the layer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customInstanceProfileArn",
        "The ARN of an IAM profile that will be used for the layer's instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "elasticLoadBalancer",
        "Name of an Elastic Load Balancer to attach to this layer",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useEbsOptimizedInstances",
        "Whether to use EBS-optimized instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAssignElasticIps",
        "Whether to automatically assign an elastic IP address to the layer's instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customDeployRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customSetupRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customShutdownRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAssignPublicIps",
        "For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customConfigureRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        opsworks_MemcachedLayerEbsVolume_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "systemPackages",
        "Names of a set of system packages to install on the layer's instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "instanceShutdownTimeout",
        "The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "drainElbOnShutdown",
        "Whether to enable Elastic Load Balancing connection draining.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        opsworks_MemcachedLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the layer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "ID of the stack the layer will belong to.",
        [],
        true,
        true,
      ),
    ];
  }
}
