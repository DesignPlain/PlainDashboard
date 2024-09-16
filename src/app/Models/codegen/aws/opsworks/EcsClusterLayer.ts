import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_EcsClusterLayerLoadBasedAutoScaling,
  opsworks_EcsClusterLayerLoadBasedAutoScaling_GetTypes,
} from '../types/opsworks_EcsClusterLayerLoadBasedAutoScaling';
import {
  opsworks_EcsClusterLayerEbsVolume,
  opsworks_EcsClusterLayerEbsVolume_GetTypes,
} from '../types/opsworks_EcsClusterLayerEbsVolume';
import {
  opsworks_EcsClusterLayerCloudwatchConfiguration,
  opsworks_EcsClusterLayerCloudwatchConfiguration_GetTypes,
} from '../types/opsworks_EcsClusterLayerCloudwatchConfiguration';

export interface EcsClusterLayerArgs {
  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  //
  customConfigureRecipes?: Array<string>;

  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customSetupRecipes?: Array<string>;

  //
  loadBasedAutoScaling?: opsworks_EcsClusterLayerLoadBasedAutoScaling;

  // A human-readable name for the layer.
  name?: string;

  /*
A mapping of tags to assign to the resource.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  //
  customShutdownRecipes?: Array<string>;

  //
  customUndeployRecipes?: Array<string>;

  // The ECS Cluster ARN of the layer.
  ecsClusterArn?: string;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_EcsClusterLayerEbsVolume>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  //
  cloudwatchConfiguration?: opsworks_EcsClusterLayerCloudwatchConfiguration;

  //
  customDeployRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;
}
export class EcsClusterLayer extends DS_Resource {
  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  //
  public customConfigureRecipes?: Array<string>;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  //
  public customUndeployRecipes?: Array<string>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  //
  public customShutdownRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  //
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_EcsClusterLayerEbsVolume>;

  //
  public loadBasedAutoScaling?: opsworks_EcsClusterLayerLoadBasedAutoScaling;

  // A human-readable name for the layer.
  public name?: string;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  /*
A mapping of tags to assign to the resource.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  //
  public cloudwatchConfiguration?: opsworks_EcsClusterLayerCloudwatchConfiguration;

  //
  public customDeployRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  //
  public customSetupRecipes?: Array<string>;

  // The ECS Cluster ARN of the layer.
  public ecsClusterArn?: string;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ecsClusterArn',
        'The ECS Cluster ARN of the layer.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'customInstanceProfileArn',
        "The ARN of an IAM profile that will be used for the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ebsVolumes',
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        () => opsworks_EcsClusterLayerEbsVolume_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'useEbsOptimizedInstances',
        'Whether to use EBS-optimized instances.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cloudwatchConfiguration',
        '',
        () => opsworks_EcsClusterLayerCloudwatchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'drainElbOnShutdown',
        'Whether to enable Elastic Load Balancing connection draining.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customUndeployRecipes',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackId',
        'ID of the stack the layer will belong to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customDeployRecipes',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customSecurityGroupIds',
        "Ids for a set of security groups to apply to the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customConfigureRecipes',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customJson',
        'Custom JSON attributes to apply to the layer.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A human-readable name for the layer.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        "A mapping of tags to assign to the resource.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customShutdownRecipes',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'installUpdatesOnBoot',
        'Whether to install OS and package updates on each instance when it boots.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'elasticLoadBalancer',
        'Name of an Elastic Load Balancer to attach to this layer',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'systemPackages',
        "Names of a set of system packages to install on the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoAssignPublicIps',
        "For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loadBasedAutoScaling',
        '',
        () => opsworks_EcsClusterLayerLoadBasedAutoScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoAssignElasticIps',
        "Whether to automatically assign an elastic IP address to the layer's instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'instanceShutdownTimeout',
        'The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoHealing',
        'Whether to enable auto-healing for the layer.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customSetupRecipes',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
