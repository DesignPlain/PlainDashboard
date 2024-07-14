import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_HaproxyLayerCloudwatchConfiguration,
  opsworks_HaproxyLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_HaproxyLayerCloudwatchConfiguration";
import {
  opsworks_HaproxyLayerLoadBasedAutoScaling,
  opsworks_HaproxyLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_HaproxyLayerLoadBasedAutoScaling";
import {
  opsworks_HaproxyLayerEbsVolume,
  opsworks_HaproxyLayerEbsVolume_GetTypes,
} from "../types/opsworks_HaproxyLayerEbsVolume";

export interface HaproxyLayerArgs {
  //
  cloudwatchConfiguration?: opsworks_HaproxyLayerCloudwatchConfiguration;

  //
  customSetupRecipes?: Array<string>;

  // Whether to enable HAProxy stats.
  statsEnabled?: boolean;

  // The password to use for HAProxy stats.
  statsPassword?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  //
  customConfigureRecipes?: Array<string>;

  //
  customShutdownRecipes?: Array<string>;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  //
  customUndeployRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // The HAProxy stats URL. Defaults to "/haproxy?stats".
  statsUrl?: string;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  // URL path to use for instance healthchecks. Defaults to "/".
  healthcheckUrl?: string;

  // HTTP method to use for instance healthchecks. Defaults to "OPTIONS".
  healthcheckMethod?: string;

  // The username for HAProxy stats. Defaults to "opsworks".
  statsUser?: string;

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

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  //
  loadBasedAutoScaling?: opsworks_HaproxyLayerLoadBasedAutoScaling;

  // A human-readable name for the layer.
  name?: string;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_HaproxyLayerEbsVolume>;

  //
  customDeployRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;
}
export class HaproxyLayer extends Resource {
  // Whether to enable HAProxy stats.
  public statsEnabled?: boolean;

  // URL path to use for instance healthchecks. Defaults to "/".
  public healthcheckUrl?: string;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  //
  public customConfigureRecipes?: Array<string>;

  // HTTP method to use for instance healthchecks. Defaults to "OPTIONS".
  public healthcheckMethod?: string;

  // A human-readable name for the layer.
  public name?: string;

  // The username for HAProxy stats. Defaults to "opsworks".
  public statsUser?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  //
  public customUndeployRecipes?: Array<string>;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_HaproxyLayerEbsVolume>;

  //
  public loadBasedAutoScaling?: opsworks_HaproxyLayerLoadBasedAutoScaling;

  //
  public cloudwatchConfiguration?: opsworks_HaproxyLayerCloudwatchConfiguration;

  //
  public customShutdownRecipes?: Array<string>;

  //
  public customSetupRecipes?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // The password to use for HAProxy stats.
  public statsPassword?: string;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  //
  public customDeployRecipes?: Array<string>;

  // The HAProxy stats URL. Defaults to "/haproxy?stats".
  public statsUrl?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "statsUrl",
        'The HAProxy stats URL. Defaults to "/haproxy?stats".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "statsEnabled",
        "Whether to enable HAProxy stats.",
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
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "healthcheckUrl",
        'URL path to use for instance healthchecks. Defaults to "/".',
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
        InputType.Array,
        "customSetupRecipes",
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
        InputType.String,
        "elasticLoadBalancer",
        "Name of an Elastic Load Balancer to attach to this layer",
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
        InputType.String,
        "healthcheckMethod",
        'HTTP method to use for instance healthchecks. Defaults to "OPTIONS".',
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
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        opsworks_HaproxyLayerLoadBasedAutoScaling_GetTypes(),
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
        InputType.Array,
        "customDeployRecipes",
        "",
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
        InputType.Array,
        "customConfigureRecipes",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "statsUser",
        'The username for HAProxy stats. Defaults to "opsworks".',
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
        InputType.String,
        "customInstanceProfileArn",
        "The ARN of an IAM profile that will be used for the layer's instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        opsworks_HaproxyLayerEbsVolume_GetTypes(),
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
        InputType.String,
        "statsPassword",
        "The password to use for HAProxy stats.",
        [],
        true,
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
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        opsworks_HaproxyLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
