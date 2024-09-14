import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_CustomLayerLoadBasedAutoScaling,
  opsworks_CustomLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_CustomLayerLoadBasedAutoScaling";
import {
  opsworks_CustomLayerCloudwatchConfiguration,
  opsworks_CustomLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_CustomLayerCloudwatchConfiguration";
import {
  opsworks_CustomLayerEbsVolume,
  opsworks_CustomLayerEbsVolume_GetTypes,
} from "../types/opsworks_CustomLayerEbsVolume";

export interface CustomLayerArgs {
  // A human-readable name for the layer.
  name?: string;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  //
  customSetupRecipes?: Array<string>;

  // Load-based auto scaling configuration. See Load Based AutoScaling
  loadBasedAutoScaling?: opsworks_CustomLayerLoadBasedAutoScaling;

  //
  customUndeployRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customShutdownRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  // Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.
  cloudwatchConfiguration?: opsworks_CustomLayerCloudwatchConfiguration;

  //
  customConfigureRecipes?: Array<string>;

  //
  customDeployRecipes?: Array<string>;

  // Will create an EBS volume and connect it to the layer's instances. See EBS Volume.
  ebsVolumes?: Array<opsworks_CustomLayerEbsVolume>;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  // A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
  shortName?: string;
}
export class CustomLayer extends DS_Resource {
  //
  public customSetupRecipes?: Array<string>;

  //
  public customUndeployRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  //
  public customConfigureRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
  public shortName?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  // Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.
  public cloudwatchConfiguration?: opsworks_CustomLayerCloudwatchConfiguration;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // Will create an EBS volume and connect it to the layer's instances. See EBS Volume.
  public ebsVolumes?: Array<opsworks_CustomLayerEbsVolume>;

  // A human-readable name for the layer.
  public name?: string;

  // Load-based auto scaling configuration. See Load Based AutoScaling
  public loadBasedAutoScaling?: opsworks_CustomLayerLoadBasedAutoScaling;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public customDeployRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  //
  public customShutdownRecipes?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "elasticLoadBalancer",
        "Name of an Elastic Load Balancer to attach to this layer",
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
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the layer.",
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        () => InputType_Map_GetTypes(),
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
        InputType.Array,
        "customSetupRecipes",
        "",
        () => InputType_String_GetTypes(),
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
        InputType.Object,
        "cloudwatchConfiguration",
        "Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.",
        () => opsworks_CustomLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "Will create an EBS volume and connect it to the layer's instances. See EBS Volume.",
        () => opsworks_CustomLayerEbsVolume_GetTypes(),
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
        InputType.String,
        "shortName",
        "A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.",
        () => [],
        true,
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
        InputType.Bool,
        "drainElbOnShutdown",
        "Whether to enable Elastic Load Balancing connection draining.",
        () => [],
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
        InputType.String,
        "name",
        "A human-readable name for the layer.",
        () => [],
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
        InputType.Array,
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "Load-based auto scaling configuration. See Load Based AutoScaling",
        () => opsworks_CustomLayerLoadBasedAutoScaling_GetTypes(),
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
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "ID of the stack the layer will belong to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customConfigureRecipes",
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
    ];
  }
}
