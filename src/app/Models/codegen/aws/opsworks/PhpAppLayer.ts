import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_PhpAppLayerEbsVolume,
  opsworks_PhpAppLayerEbsVolume_GetTypes,
} from '../types/opsworks_PhpAppLayerEbsVolume';
import {
  opsworks_PhpAppLayerCloudwatchConfiguration,
  opsworks_PhpAppLayerCloudwatchConfiguration_GetTypes,
} from '../types/opsworks_PhpAppLayerCloudwatchConfiguration';
import {
  opsworks_PhpAppLayerLoadBasedAutoScaling,
  opsworks_PhpAppLayerLoadBasedAutoScaling_GetTypes,
} from '../types/opsworks_PhpAppLayerLoadBasedAutoScaling';

export interface PhpAppLayerArgs {
  // Custom JSON attributes to apply to the layer.
  customJson?: string;

  //
  customUndeployRecipes?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  ebsVolumes?: Array<opsworks_PhpAppLayerEbsVolume>;

  // Name of an Elastic Load Balancer to attach to this layer
  elasticLoadBalancer?: string;

  // Names of a set of system packages to install on the layer's instances.
  systemPackages?: Array<string>;

  // Whether to enable auto-healing for the layer.
  autoHealing?: boolean;

  //
  customShutdownRecipes?: Array<string>;

  // A human-readable name for the layer.
  name?: string;

  //
  customConfigureRecipes?: Array<string>;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  autoAssignPublicIps?: boolean;

  //
  cloudwatchConfiguration?: opsworks_PhpAppLayerCloudwatchConfiguration;

  //
  customDeployRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  customInstanceProfileArn?: string;

  //
  customSetupRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  drainElbOnShutdown?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  instanceShutdownTimeout?: number;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  autoAssignElasticIps?: boolean;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  tags?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  useEbsOptimizedInstances?: boolean;

  //
  loadBasedAutoScaling?: opsworks_PhpAppLayerLoadBasedAutoScaling;

  // Whether to install OS and package updates on each instance when it boots.
  installUpdatesOnBoot?: boolean;

  // ID of the stack the layer will belong to.
  stackId?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  customSecurityGroupIds?: Array<string>;
}
export class PhpAppLayer extends DS_Resource {
  // Custom JSON attributes to apply to the layer.
  public customJson?: string;

  // Whether to install OS and package updates on each instance when it boots.
  public installUpdatesOnBoot?: boolean;

  // The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
  public instanceShutdownTimeout?: number;

  // A human-readable name for the layer.
  public name?: string;

  // Whether to automatically assign an elastic IP address to the layer's instances.
  public autoAssignElasticIps?: boolean;

  //
  public customConfigureRecipes?: Array<string>;

  // The ARN of an IAM profile that will be used for the layer's instances.
  public customInstanceProfileArn?: string;

  // Ids for a set of security groups to apply to the layer's instances.
  public customSecurityGroupIds?: Array<string>;

  // ID of the stack the layer will belong to.
  public stackId?: string;

  // Whether to enable auto-healing for the layer.
  public autoHealing?: boolean;

  //
  public cloudwatchConfiguration?: opsworks_PhpAppLayerCloudwatchConfiguration;

  //
  public customDeployRecipes?: Array<string>;

  //
  public customShutdownRecipes?: Array<string>;

  //
  public customUndeployRecipes?: Array<string>;

  // `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
  public ebsVolumes?: Array<opsworks_PhpAppLayerEbsVolume>;

  // Name of an Elastic Load Balancer to attach to this layer
  public elasticLoadBalancer?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following extra optional arguments, all lists of Chef recipe names, allow
custom Chef recipes to be applied to layer instances at the five different
lifecycle events, if custom cookbooks are enabled on the layer's stack:
*/
  public tags?: Map<string, string>;

  // Whether to use EBS-optimized instances.
  public useEbsOptimizedInstances?: boolean;

  // The Amazon Resource Name(ARN) of the layer.
  public arn?: string;

  // For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
  public autoAssignPublicIps?: boolean;

  //
  public customSetupRecipes?: Array<string>;

  // Whether to enable Elastic Load Balancing connection draining.
  public drainElbOnShutdown?: boolean;

  //
  public loadBasedAutoScaling?: opsworks_PhpAppLayerLoadBasedAutoScaling;

  // Names of a set of system packages to install on the layer's instances.
  public systemPackages?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'systemPackages',
        "Names of a set of system packages to install on the layer's instances.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cloudwatchConfiguration',
        '',
        () => opsworks_PhpAppLayerCloudwatchConfiguration_GetTypes(),
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
        InputType.Bool,
        'installUpdatesOnBoot',
        'Whether to install OS and package updates on each instance when it boots.',
        () => [],
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
        'customSecurityGroupIds',
        "Ids for a set of security groups to apply to the layer's instances.",
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
        InputType.Array,
        'ebsVolumes',
        "`ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.",
        () => opsworks_PhpAppLayerEbsVolume_GetTypes(),
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
        'customConfigureRecipes',
        '',
        () => InputType_String_GetTypes(),
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
        InputType.Map,
        'tags',
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following extra optional arguments, all lists of Chef recipe names, allow\ncustom Chef recipes to be applied to layer instances at the five different\nlifecycle events, if custom cookbooks are enabled on the layer's stack:",
        () => InputType_Map_GetTypes(),
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
        InputType.Array,
        'customShutdownRecipes',
        '',
        () => InputType_String_GetTypes(),
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
      new DynamicUIProps(
        InputType.Number,
        'instanceShutdownTimeout',
        'The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loadBasedAutoScaling',
        '',
        () => opsworks_PhpAppLayerLoadBasedAutoScaling_GetTypes(),
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
        'elasticLoadBalancer',
        'Name of an Elastic Load Balancer to attach to this layer',
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
        InputType.Bool,
        'autoAssignPublicIps',
        "For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.",
        () => [],
        false,
        false,
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
        InputType.String,
        'customInstanceProfileArn',
        "The ARN of an IAM profile that will be used for the layer's instances.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
