import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_JavaAppLayerEbsVolume,
  opsworks_JavaAppLayerEbsVolume_GetTypes,
} from "../types/opsworks_JavaAppLayerEbsVolume";
import {
  opsworks_JavaAppLayerLoadBasedAutoScaling,
  opsworks_JavaAppLayerLoadBasedAutoScaling_GetTypes,
} from "../types/opsworks_JavaAppLayerLoadBasedAutoScaling";
import {
  opsworks_JavaAppLayerCloudwatchConfiguration,
  opsworks_JavaAppLayerCloudwatchConfiguration_GetTypes,
} from "../types/opsworks_JavaAppLayerCloudwatchConfiguration";

export interface JavaAppLayerArgs {
  // A human-readable name for the layer.
  name?: string;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // Keyword for the application container to use. Defaults to "tomcat".
  appServer?: string;

  // Version of the selected application container to use. Defaults to "7".
  appServerVersion?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_JavaAppLayerEbsVolume>;

  // Options to set for the JVM.
  jvmOptions?: string;

  // Keyword for the type of JVM to use. Defaults to `openjdk`.
  jvmType?: string;

  //
  loadBasedAutoScaling?: opsworks_JavaAppLayerLoadBasedAutoScaling;

  //
  customUndeployRecipes?: Array<string>;

  // Version of JVM to use. Defaults to "7".
  jvmVersion?: string;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  //
  customDeployRecipes?: Array<string>;

  //
  customShutdownRecipes?: Array<string>;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  //
  customConfigureRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  //
  cloudwatchConfiguration?: opsworks_JavaAppLayerCloudwatchConfiguration;

  //
  customSetupRecipes?: Array<string>;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

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
}
export class JavaAppLayer extends Resource {
  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  //
  public cloudwatchConfiguration?: opsworks_JavaAppLayerCloudwatchConfiguration;

  //
  public customSetupRecipes?: Array<string>;

  // Keyword for the type of JVM to use. Defaults to `openjdk`.
  public jvmType?: string;

  // Version of the selected application container to use. Defaults to "7".
  public appServerVersion?: string;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // A human-readable name for the layer.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  //
  public customShutdownRecipes?: Array<string>;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  //
  public customConfigureRecipes?: Array<string>;

  //
  public customDeployRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Version of JVM to use. Defaults to "7".
  public jvmVersion?: string;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  //
  public customUndeployRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_JavaAppLayerEbsVolume>;

  // Options to set for the JVM.
  public jvmOptions?: string;

  //
  public loadBasedAutoScaling?: opsworks_JavaAppLayerLoadBasedAutoScaling;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // Keyword for the application container to use. Defaults to "tomcat".
  public appServer?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "jvmOptions",
        "Options to set for the JVM.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBasedAutoScaling",
        "",
        opsworks_JavaAppLayerLoadBasedAutoScaling_GetTypes(),
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
        InputType.String,
        "name",
        "A human-readable name for the layer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appServerVersion",
        'Version of the selected application container to use. Defaults to "7".',
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
        "customUndeployRecipes",
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
        "installUpdatesOnBoot",
        "Whether to install OS and package updates on each instance when it boots.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsVolumes",
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        opsworks_JavaAppLayerEbsVolume_GetTypes(),
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
        InputType.Array,
        "customSecurityGroupIds",
        "Ids for a set of security groups to apply to the layer's instances.",
        InputType_String_GetTypes(),
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
        InputType.Object,
        "cloudwatchConfiguration",
        "",
        opsworks_JavaAppLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "jvmType",
        "Keyword for the type of JVM to use. Defaults to `openjdk`.",
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
        "customDeployRecipes",
        "",
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
        InputType.String,
        "customInstanceProfileArn",
        "The ARN of an IAM profile that will be used for the layer's instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appServer",
        'Keyword for the application container to use. Defaults to "tomcat".',
        [],
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "jvmVersion",
        'Version of JVM to use. Defaults to "7".',
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
        InputType.Array,
        "systemPackages",
        "Names of a set of system packages to install on the layer's instances.",
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
    ];
  }
}
