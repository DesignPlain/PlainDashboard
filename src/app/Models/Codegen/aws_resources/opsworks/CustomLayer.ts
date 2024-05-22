import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_CustomLayerLoadBasedAutoScaling,
  opsworks_CustomLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_CustomLayerLoadBasedAutoScaling";
import {
  opsworks_CustomLayerEbsVolume,
  opsworks_CustomLayerEbsVolume_GetTypes,
} from "../types/opsworks_CustomLayerEbsVolume";
import {
  opsworks_CustomLayerCloudwatchConfiguration,
  opsworks_CustomLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_CustomLayerCloudwatchConfiguration";

export interface CustomLayerArgs {
  // ID of the stack the layer will belong to.
  stackId?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  // Load-based auto scaling configuration. See Load Based AutoScaling
  loadBasedAutoScaling?: opsworks_CustomLayerLoadBasedAutoScaling;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  // Will create an EBS volume and connect it to the layer's instances. See EBS Volume.
  ebsVolumes?: Array<opsworks_CustomLayerEbsVolume>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
  shortName?: string;

  //
  customSetupRecipes?: Array<string>;

  //
  customUndeployRecipes?: Array<string>;

  // A human-readable name for the layer.
  name?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  //
  customConfigureRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.
  cloudwatchConfiguration?: opsworks_CustomLayerCloudwatchConfiguration;

  //
  customDeployRecipes?: Array<string>;

  //
  customShutdownRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;
}
export class CustomLayer extends Resource {
  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.
  public cloudwatchConfiguration?: opsworks_CustomLayerCloudwatchConfiguration;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  //
  public customUndeployRecipes?: Array<string>;

  // A human-readable name for the layer.
  public name?: string;

  // A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.
  public shortName?: string;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  //
  public customDeployRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  //
  public customShutdownRecipes?: Array<string>;

  // Will create an EBS volume and connect it to the layer's instances. See EBS Volume.
  public ebsVolumes?: Array<opsworks_CustomLayerEbsVolume>;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  //
  public customConfigureRecipes?: Array<string>;

  //
  public customSetupRecipes?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        InputType.String,
        "name",
        "A human-readable name for the layer.",
        [],
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
        InputType.Array,
        "customShutdownRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "Load-based auto scaling configuration. See Load Based AutoScaling",
        opsworks_CustomLayerLoadBasedAutoScaling_GetTypes(),
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
        InputType.Array,
        "ebsVolumes",
        "Will create an EBS volume and connect it to the layer's instances. See EBS Volume.",
        opsworks_CustomLayerEbsVolume_GetTypes(),
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
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the layer.",
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        InputType_Map_GetTypes(),
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
        InputType.String,
        "shortName",
        "A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON.",
        [],
        true,
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
        InputType.Object,
        "cloudwatchConfiguration",
        "Will create an EBS volume and connect it to the layer's instances. See Cloudwatch Configuration.",
        opsworks_CustomLayerCloudwatchConfiguration_GetTypes(),
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
        InputType.String,
        "stackId",
        "ID of the stack the layer will belong to.",
        [],
        true,
        true,
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
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoHealing",
        "Whether to enable auto-healing for the layer.",
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
    ];
  }
}
