import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_JavaAppLayerCloudwatchConfiguration,
  opsworks_JavaAppLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_JavaAppLayerCloudwatchConfiguration";
import {
  opsworks_JavaAppLayerLoadBasedAutoScaling,
  opsworks_JavaAppLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_JavaAppLayerLoadBasedAutoScaling";
import {
  opsworks_JavaAppLayerEbsVolume,
  opsworks_JavaAppLayerEbsVolume_GetTypes,
} from "../types/opsworks_JavaAppLayerEbsVolume";

export interface JavaAppLayerArgs {
  // Version of the selected application container to use. Defaults to "7".
  appServerVersion?: string;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // A human-readable name for the layer.
  name?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  //
  cloudwatchConfiguration?: opsworks_JavaAppLayerCloudwatchConfiguration;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  //
  customUndeployRecipes?: Array<string>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // Version of JVM to use. Defaults to "7".
  jvmVersion?: string;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  //
  loadBasedAutoScaling?: opsworks_JavaAppLayerLoadBasedAutoScaling;

  // Keyword for the type of JVM to use. Defaults to `openjdk`.
  jvmType?: string;

  // Keyword for the application container to use. Defaults to "tomcat".
  appServer?: string;

  //
  customDeployRecipes?: Array<string>;

  //
  customSetupRecipes?: Array<string>;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  //
  customConfigureRecipes?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_JavaAppLayerEbsVolume>;

  // Options to set for the JVM.
  jvmOptions?: string;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customShutdownRecipes?: Array<string>;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;
}
export class JavaAppLayer extends DS_Resource {
  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // Keyword for the type of JVM to use. Defaults to `openjdk`.
  public jvmType?: string;

  // Version of JVM to use. Defaults to "7".
  public jvmVersion?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  //
  public customDeployRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  //
  public customUndeployRecipes?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_JavaAppLayerEbsVolume>;

  // Keyword for the application container to use. Defaults to "tomcat".
  public appServer?: string;

  //
  public cloudwatchConfiguration?: opsworks_JavaAppLayerCloudwatchConfiguration;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // Version of the selected application container to use. Defaults to "7".
  public appServerVersion?: string;

  //
  public loadBasedAutoScaling?: opsworks_JavaAppLayerLoadBasedAutoScaling;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  //
  public customSetupRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // A human-readable name for the layer.
  public name?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  //
  public customShutdownRecipes?: Array<string>;

  // Options to set for the JVM.
  public jvmOptions?: string;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  //
  public customConfigureRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "customUndeployRecipes",
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        () => opsworks_JavaAppLayerLoadBasedAutoScaling_GetTypes(),
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
        InputType.Array,
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        () => InputType_String_GetTypes(),
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
        "autoHealing",
        "Whether to enable auto-healing for the layer.",
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
        "jvmType",
        "Keyword for the type of JVM to use. Defaults to `openjdk`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "jvmOptions",
        "Options to set for the JVM.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appServerVersion",
        'Version of the selected application container to use. Defaults to "7".',
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
        InputType.String,
        "appServer",
        'Keyword for the application container to use. Defaults to "tomcat".',
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
        "name",
        "A human-readable name for the layer.",
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
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the layer.",
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
        InputType.Array,
        "customConfigureRecipes",
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
        InputType.String,
        "elasticLoadBalancer",
        "Name of an Elastic Load Balancer to attach to this layer",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        () => opsworks_JavaAppLayerEbsVolume_GetTypes(),
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
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        () => opsworks_JavaAppLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "jvmVersion",
        'Version of JVM to use. Defaults to "7".',
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
      new DynamicUIProps(
        InputType.Array,
        "customDeployRecipes",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
