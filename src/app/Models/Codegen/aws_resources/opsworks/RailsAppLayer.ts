import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_RailsAppLayerLoadBasedAutoScaling,
  opsworks_RailsAppLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_RailsAppLayerLoadBasedAutoScaling";
import {
  opsworks_RailsAppLayerCloudwatchConfiguration,
  opsworks_RailsAppLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_RailsAppLayerCloudwatchConfiguration";
import {
  opsworks_RailsAppLayerEbsVolume,
  opsworks_RailsAppLayerEbsVolume_GetTypes,
} from "../types/opsworks_RailsAppLayerEbsVolume";

export interface RailsAppLayerArgs {
  //
  loadBasedAutoScaling?: opsworks_RailsAppLayerLoadBasedAutoScaling;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Keyword for the app server to use. Defaults to "apache_passenger".
  appServer?: string;

  //
  customConfigureRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // The version of Ruby to use. Defaults to "2.0.0".
  rubyVersion?: string;

  // The version of RubyGems to use. Defaults to "2.2.2".
  rubygemsVersion?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
  bundlerVersion?: string;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customSetupRecipes?: Array<string>;

  // The version of Passenger to use. Defaults to "4.0.46".
  passengerVersion?: string;

  //
  customShutdownRecipes?: Array<string>;

  // Whether OpsWorks should manage bundler. On by default.
  manageBundler?: boolean;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  //
  cloudwatchConfiguration?: opsworks_RailsAppLayerCloudwatchConfiguration;

  //
  customDeployRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_RailsAppLayerEbsVolume>;

  //
  customUndeployRecipes?: Array<string>;

  // A human-readable name for the layer.
  name?: string;
}
export class RailsAppLayer extends Resource {
  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  //
  public customSetupRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  //
  public loadBasedAutoScaling?: opsworks_RailsAppLayerLoadBasedAutoScaling;

  // The version of Ruby to use. Defaults to "2.0.0".
  public rubyVersion?: string;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_RailsAppLayerEbsVolume>;

  // The version of Passenger to use. Defaults to "4.0.46".
  public passengerVersion?: string;

  // A human-readable name for the layer.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
  public bundlerVersion?: string;

  // Keyword for the app server to use. Defaults to "apache_passenger".
  public appServer?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // The version of RubyGems to use. Defaults to "2.2.2".
  public rubygemsVersion?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  //
  public customDeployRecipes?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  //
  public customUndeployRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  //
  public customShutdownRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Whether OpsWorks should manage bundler. On by default.
  public manageBundler?: boolean;

  //
  public cloudwatchConfiguration?: opsworks_RailsAppLayerCloudwatchConfiguration;

  //
  public customConfigureRecipes?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "customJson",
        "Custom JSON attributes to apply to the layer.",
        [],
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
        "customSetupRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "manageBundler",
        "Whether OpsWorks should manage bundler. On by default.",
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
        InputType.Array,
        "customConfigureRecipes",
        "",
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
        "autoAssignPublicIps",
        "For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.",
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
        InputType.String,
        "rubygemsVersion",
        'The version of RubyGems to use. Defaults to "2.2.2".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        opsworks_RailsAppLayerLoadBasedAutoScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appServer",
        'Keyword for the app server to use. Defaults to "apache_passenger".',
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
        InputType.Array,
        "customDeployRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rubyVersion",
        'The version of Ruby to use. Defaults to "2.0.0".',
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
        InputType.Bool,
        "useEbsOptimizedInstances",
        "Whether to use EBS-optimized instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        opsworks_RailsAppLayerCloudwatchConfiguration_GetTypes(),
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bundlerVersion",
        'When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "passengerVersion",
        'The version of Passenger to use. Defaults to "4.0.46".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        opsworks_RailsAppLayerEbsVolume_GetTypes(),
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
        "stackId",
        "ID of the stack the layer will belong to.",
        [],
        true,
        true,
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
        "customInstanceProfileArn",
        "The ARN of an IAM profile that will be used for the layer's instances.",
        [],
        false,
        false,
      ),
    ];
  }
}
