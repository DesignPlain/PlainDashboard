import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_GroupTag,
  autoscaling_GroupTag_GetTypes,
} from '../types/autoscaling_GroupTag';
import {
  autoscaling_GroupInitialLifecycleHook,
  autoscaling_GroupInitialLifecycleHook_GetTypes,
} from '../types/autoscaling_GroupInitialLifecycleHook';
import {
  autoscaling_GroupWarmPool,
  autoscaling_GroupWarmPool_GetTypes,
} from '../types/autoscaling_GroupWarmPool';
import {
  autoscaling_GroupInstanceMaintenancePolicy,
  autoscaling_GroupInstanceMaintenancePolicy_GetTypes,
} from '../types/autoscaling_GroupInstanceMaintenancePolicy';
import {
  autoscaling_GroupInstanceRefresh,
  autoscaling_GroupInstanceRefresh_GetTypes,
} from '../types/autoscaling_GroupInstanceRefresh';
import {
  autoscaling_GroupMixedInstancesPolicy,
  autoscaling_GroupMixedInstancesPolicy_GetTypes,
} from '../types/autoscaling_GroupMixedInstancesPolicy';
import {
  autoscaling_GroupTrafficSource,
  autoscaling_GroupTrafficSource_GetTypes,
} from '../types/autoscaling_GroupTrafficSource';
import {
  autoscaling_GroupLaunchTemplate,
  autoscaling_GroupLaunchTemplate_GetTypes,
} from '../types/autoscaling_GroupLaunchTemplate';

export interface GroupArgs {
  // Whether capacity rebalance is enabled. Otherwise, capacity rebalance is disabled.
  capacityRebalance?: boolean;

  /*
Number of Amazon EC2 instances that
should be running in the group. (See also Waiting for
Capacity below.)
*/
  desiredCapacity?: number;

  // "EC2" or "ELB". Controls how health checking is done.
  healthCheckType?: string;

  // Whether to ignore failed [Auto Scaling scaling activities](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html) while waiting for capacity. The default is `false` -- failed scaling activities cause errors to be returned.
  ignoreFailedScalingActivities?: boolean;

  // Name of the launch configuration to use.
  launchConfiguration?: string;

  // List of policies to decide how the instances in the Auto Scaling Group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`. Additionally, the ARN of a Lambda function can be specified for custom termination policies.
  terminationPolicies?: Array<string>;

  // A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `vpc_zone_identifier` attribute, or for attaching a network interface when an existing network interface ID is specified in a launch template. Conflicts with `vpc_zone_identifier`.
  availabilityZones?: Array<string>;

  // Amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
  defaultCooldown?: number;

  // Maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 86400 and 31536000 seconds.
  maxInstanceLifetime?: number;

  // Maximum size of the Auto Scaling Group.
  maxSize?: number;

  // Set of `aws.alb.TargetGroup` ARNs, for use with Application or Network Load Balancing. To remove all target group attachments an empty list should be specified.
  targetGroupArns?: Array<string>;

  // List of metrics to collect. The allowed values are defined by the [underlying AWS API](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html).
  enabledMetrics?: Array<string>;

  /*
One or more
[Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
to attach to the Auto Scaling Group --before-- instances are launched. The
syntax is exactly the same as the separate
`aws.autoscaling.LifecycleHook`
resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
a new Auto Scaling Group. For all other use-cases, please use `aws.autoscaling.LifecycleHook` resource.
*/
  initialLifecycleHooks?: Array<autoscaling_GroupInitialLifecycleHook>;

  // Name of the placement group into which you'll launch your instances, if any.
  placementGroup?: string;

  /*
Whether newly launched instances
are automatically protected from termination by Amazon EC2 Auto Scaling when
scaling in. For more information about preventing instances from terminating
on scale in, see [Using instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html)
in the Amazon EC2 Auto Scaling User Guide.
*/
  protectFromScaleIn?: boolean;

  /*
List of processes to suspend for the Auto Scaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`, `InstanceRefresh`.
Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your Auto Scaling Group from functioning properly.
*/
  suspendedProcesses?: Array<string>;

  /*
If this block is configured, add a [Warm Pool](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html)
to the specified Auto Scaling group. Defined below
*/
  warmPool?: autoscaling_GroupWarmPool;

  // Amount of time, in seconds, until a newly launched instance can contribute to the Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling aggregates instance metrics, resulting in more reliable usage data. Set this value equal to the amount of time that it takes for resource consumption to become stable after an instance reaches the InService state. (See [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html))
  defaultInstanceWarmup?: number;

  // The unit of measurement for the value specified for `desired_capacity`. Supported for attribute-based instance type selection only. Valid values: `"units"`, `"vcpu"`, `"memory-mib"`.
  desiredCapacityType?: string;

  // Allows deleting the Auto Scaling Group without waiting for all instances in the warm pool to terminate.
  forceDeleteWarmPool?: boolean;

  // If this block is configured, add a instance maintenance policy to the specified Auto Scaling group. Defined below.
  instanceMaintenancePolicy?: autoscaling_GroupInstanceMaintenancePolicy;

  /*
If this block is configured, start an
[Instance Refresh](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html)
when this Auto Scaling Group is updated. Defined below.
*/
  instanceRefresh?: autoscaling_GroupInstanceRefresh;

  // Granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
  metricsGranularity?: string;

  /*
Minimum size of the Auto Scaling Group.
(See also Waiting for Capacity below.)
*/
  minSize?: number;

  // Configuration block containing settings to define launch targets for Auto Scaling groups. See Mixed Instances Policy below for more details.
  mixedInstancesPolicy?: autoscaling_GroupMixedInstancesPolicy;

  // Name of the Auto Scaling Group. By default generated by Pulumi. Conflicts with `name_prefix`.
  name?: string;

  /*
Setting this will cause Pulumi to wait
for exactly this number of healthy instances from this Auto Scaling Group in
all attached load balancers on both create and update operations. (Takes
precedence over `min_elb_capacity` behavior.)
(See also Waiting for Capacity below.)
*/
  waitForElbCapacity?: number;

  // Attaches one or more traffic sources to the specified Auto Scaling group.
  trafficSources?: Array<autoscaling_GroupTrafficSource>;

  // List of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside. Conflicts with `availability_zones`.
  vpcZoneIdentifiers?: Array<string>;

  /*
Allows deleting the Auto Scaling Group without waiting
for all instances in the pool to terminate. You can force an Auto Scaling Group to delete
even if it's in the process of scaling a resource. Normally, this provider
drains all the instances before deleting the group. This bypasses that
behavior and potentially leaves resources dangling.
*/
  forceDelete?: boolean;

  /*
List of elastic load balancer names to add to the autoscaling
group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead. To remove all load balancer attachments an empty list should be specified.
*/
  loadBalancers?: Array<string>;

  /*
Setting this causes Pulumi to wait for
this number of instances from this Auto Scaling Group to show up healthy in the
ELB only on creation. Updates will not wait on ELB instance number changes.
(See also Waiting for Capacity below.)
*/
  minElbCapacity?: number;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  // ARN of the service-linked role that the ASG will use to call other AWS services
  serviceLinkedRoleArn?: string;

  // Reserved.
  context?: string;

  // Time (in seconds) after instance comes into service before checking health.
  healthCheckGracePeriod?: number;

  // Nested argument with Launch template specification to use to launch instances. See Launch Template below for more details.
  launchTemplate?: autoscaling_GroupLaunchTemplate;

  // Configuration block(s) containing resource tags. See Tag below for more details.
  tags?: Array<autoscaling_GroupTag>;

  /*
Maximum
[duration](https://golang.org/pkg/time/#ParseDuration) that the provider should
wait for ASG instances to be healthy before timing out. (See also Waiting
for Capacity below.) Setting this to "0" causes
the provider to skip all Capacity Waiting behavior.
*/
  waitForCapacityTimeout?: string;
}
export class Group extends DS_Resource {
  // Whether capacity rebalance is enabled. Otherwise, capacity rebalance is disabled.
  public capacityRebalance?: boolean;

  // Maximum size of the Auto Scaling Group.
  public maxSize?: number;

  /*
Whether newly launched instances
are automatically protected from termination by Amazon EC2 Auto Scaling when
scaling in. For more information about preventing instances from terminating
on scale in, see [Using instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html)
in the Amazon EC2 Auto Scaling User Guide.
*/
  public protectFromScaleIn?: boolean;

  // List of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside. Conflicts with `availability_zones`.
  public vpcZoneIdentifiers?: Array<string>;

  /*
Setting this will cause Pulumi to wait
for exactly this number of healthy instances from this Auto Scaling Group in
all attached load balancers on both create and update operations. (Takes
precedence over `min_elb_capacity` behavior.)
(See also Waiting for Capacity below.)
*/
  public waitForElbCapacity?: number;

  // Granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
  public metricsGranularity?: string;

  // Configuration block containing settings to define launch targets for Auto Scaling groups. See Mixed Instances Policy below for more details.
  public mixedInstancesPolicy?: autoscaling_GroupMixedInstancesPolicy;

  /*
Number of Amazon EC2 instances that
should be running in the group. (See also Waiting for
Capacity below.)
*/
  public desiredCapacity?: number;

  // List of metrics to collect. The allowed values are defined by the [underlying AWS API](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html).
  public enabledMetrics?: Array<string>;

  // Allows deleting the Auto Scaling Group without waiting for all instances in the warm pool to terminate.
  public forceDeleteWarmPool?: boolean;

  // Time (in seconds) after instance comes into service before checking health.
  public healthCheckGracePeriod?: number;

  /*
One or more
[Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
to attach to the Auto Scaling Group --before-- instances are launched. The
syntax is exactly the same as the separate
`aws.autoscaling.LifecycleHook`
resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
a new Auto Scaling Group. For all other use-cases, please use `aws.autoscaling.LifecycleHook` resource.
*/
  public initialLifecycleHooks?: Array<autoscaling_GroupInitialLifecycleHook>;

  /*
If this block is configured, start an
[Instance Refresh](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html)
when this Auto Scaling Group is updated. Defined below.
*/
  public instanceRefresh?: autoscaling_GroupInstanceRefresh;

  // ARN of the service-linked role that the ASG will use to call other AWS services
  public serviceLinkedRoleArn?: string;

  // List of policies to decide how the instances in the Auto Scaling Group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`. Additionally, the ARN of a Lambda function can be specified for custom termination policies.
  public terminationPolicies?: Array<string>;

  /*
Maximum
[duration](https://golang.org/pkg/time/#ParseDuration) that the provider should
wait for ASG instances to be healthy before timing out. (See also Waiting
for Capacity below.) Setting this to "0" causes
the provider to skip all Capacity Waiting behavior.
*/
  public waitForCapacityTimeout?: string;

  // ARN for this Auto Scaling Group
  public arn?: string;

  // Nested argument with Launch template specification to use to launch instances. See Launch Template below for more details.
  public launchTemplate?: autoscaling_GroupLaunchTemplate;

  /*
Setting this causes Pulumi to wait for
this number of instances from this Auto Scaling Group to show up healthy in the
ELB only on creation. Updates will not wait on ELB instance number changes.
(See also Waiting for Capacity below.)
*/
  public minElbCapacity?: number;

  /*
Minimum size of the Auto Scaling Group.
(See also Waiting for Capacity below.)
*/
  public minSize?: number;

  // Name of the placement group into which you'll launch your instances, if any.
  public placementGroup?: string;

  /*
List of processes to suspend for the Auto Scaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`, `InstanceRefresh`.
Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your Auto Scaling Group from functioning properly.
*/
  public suspendedProcesses?: Array<string>;

  /*
List of elastic load balancer names to add to the autoscaling
group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead. To remove all load balancer attachments an empty list should be specified.
*/
  public loadBalancers?: Array<string>;

  // Reserved.
  public context?: string;

  // Amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
  public defaultCooldown?: number;

  // Amount of time, in seconds, until a newly launched instance can contribute to the Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling aggregates instance metrics, resulting in more reliable usage data. Set this value equal to the amount of time that it takes for resource consumption to become stable after an instance reaches the InService state. (See [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html))
  public defaultInstanceWarmup?: number;

  /*
Allows deleting the Auto Scaling Group without waiting
for all instances in the pool to terminate. You can force an Auto Scaling Group to delete
even if it's in the process of scaling a resource. Normally, this provider
drains all the instances before deleting the group. This bypasses that
behavior and potentially leaves resources dangling.
*/
  public forceDelete?: boolean;

  // If this block is configured, add a instance maintenance policy to the specified Auto Scaling group. Defined below.
  public instanceMaintenancePolicy?: autoscaling_GroupInstanceMaintenancePolicy;

  // Name of the launch configuration to use.
  public launchConfiguration?: string;

  // "EC2" or "ELB". Controls how health checking is done.
  public healthCheckType?: string;

  // Name of the Auto Scaling Group. By default generated by Pulumi. Conflicts with `name_prefix`.
  public name?: string;

  // Predicted capacity of the group.
  public predictedCapacity?: number;

  // Current size of the warm pool.
  public warmPoolSize?: number;

  // A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `vpc_zone_identifier` attribute, or for attaching a network interface when an existing network interface ID is specified in a launch template. Conflicts with `vpc_zone_identifier`.
  public availabilityZones?: Array<string>;

  // Whether to ignore failed [Auto Scaling scaling activities](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html) while waiting for capacity. The default is `false` -- failed scaling activities cause errors to be returned.
  public ignoreFailedScalingActivities?: boolean;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // Set of `aws.alb.TargetGroup` ARNs, for use with Application or Network Load Balancing. To remove all target group attachments an empty list should be specified.
  public targetGroupArns?: Array<string>;

  // Attaches one or more traffic sources to the specified Auto Scaling group.
  public trafficSources?: Array<autoscaling_GroupTrafficSource>;

  // The unit of measurement for the value specified for `desired_capacity`. Supported for attribute-based instance type selection only. Valid values: `"units"`, `"vcpu"`, `"memory-mib"`.
  public desiredCapacityType?: string;

  // Maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 86400 and 31536000 seconds.
  public maxInstanceLifetime?: number;

  // Configuration block(s) containing resource tags. See Tag below for more details.
  public tags?: Array<autoscaling_GroupTag>;

  /*
If this block is configured, add a [Warm Pool](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html)
to the specified Auto Scaling group. Defined below
*/
  public warmPool?: autoscaling_GroupWarmPool;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'targetGroupArns',
        'Set of `aws.alb.TargetGroup` ARNs, for use with Application or Network Load Balancing. To remove all target group attachments an empty list should be specified.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'enabledMetrics',
        'List of metrics to collect. The allowed values are defined by the [underlying AWS API](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html).',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'desiredCapacityType',
        'The unit of measurement for the value specified for `desired_capacity`. Supported for attribute-based instance type selection only. Valid values: `"units"`, `"vcpu"`, `"memory-mib"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceRefresh',
        'If this block is configured, start an\n[Instance Refresh](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html)\nwhen this Auto Scaling Group is updated. Defined below.',
        () => autoscaling_GroupInstanceRefresh_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'waitForElbCapacity',
        'Setting this will cause Pulumi to wait\nfor exactly this number of healthy instances from this Auto Scaling Group in\nall attached load balancers on both create and update operations. (Takes\nprecedence over `min_elb_capacity` behavior.)\n(See also Waiting for Capacity below.)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDelete',
        "Allows deleting the Auto Scaling Group without waiting\nfor all instances in the pool to terminate. You can force an Auto Scaling Group to delete\neven if it's in the process of scaling a resource. Normally, this provider\ndrains all the instances before deleting the group. This bypasses that\nbehavior and potentially leaves resources dangling.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'loadBalancers',
        'List of elastic load balancer names to add to the autoscaling\ngroup names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead. To remove all load balancer attachments an empty list should be specified.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tags',
        'Configuration block(s) containing resource tags. See Tag below for more details.',
        () => autoscaling_GroupTag_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'desiredCapacity',
        'Number of Amazon EC2 instances that\nshould be running in the group. (See also Waiting for\nCapacity below.)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'warmPool',
        'If this block is configured, add a [Warm Pool](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html)\nto the specified Auto Scaling group. Defined below',
        () => autoscaling_GroupWarmPool_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxInstanceLifetime',
        'Maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 86400 and 31536000 seconds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minSize',
        'Minimum size of the Auto Scaling Group.\n(See also Waiting for Capacity below.)',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'placementGroup',
        "Name of the placement group into which you'll launch your instances, if any.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'suspendedProcesses',
        'List of processes to suspend for the Auto Scaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`, `InstanceRefresh`.\nNote that if you suspend either the `Launch` or `Terminate` process types, it can prevent your Auto Scaling Group from functioning properly.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'defaultInstanceWarmup',
        'Amount of time, in seconds, until a newly launched instance can contribute to the Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling aggregates instance metrics, resulting in more reliable usage data. Set this value equal to the amount of time that it takes for resource consumption to become stable after an instance reaches the InService state. (See [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html))',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'metricsGranularity',
        'Granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'mixedInstancesPolicy',
        'Configuration block containing settings to define launch targets for Auto Scaling groups. See Mixed Instances Policy below for more details.',
        () => autoscaling_GroupMixedInstancesPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceLinkedRoleArn',
        'ARN of the service-linked role that the ASG will use to call other AWS services',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'capacityRebalance',
        'Whether capacity rebalance is enabled. Otherwise, capacity rebalance is disabled.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxSize',
        'Maximum size of the Auto Scaling Group.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'launchTemplate',
        'Nested argument with Launch template specification to use to launch instances. See Launch Template below for more details.',
        () => autoscaling_GroupLaunchTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'waitForCapacityTimeout',
        'Maximum\n[duration](https://golang.org/pkg/time/#ParseDuration) that the provider should\nwait for ASG instances to be healthy before timing out. (See also Waiting\nfor Capacity below.) Setting this to "0" causes\nthe provider to skip all Capacity Waiting behavior.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'vpcZoneIdentifiers',
        'List of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside. Conflicts with `availability_zones`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'context',
        'Reserved.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'launchConfiguration',
        'Name of the launch configuration to use.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'protectFromScaleIn',
        'Whether newly launched instances\nare automatically protected from termination by Amazon EC2 Auto Scaling when\nscaling in. For more information about preventing instances from terminating\non scale in, see [Using instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html)\nin the Amazon EC2 Auto Scaling User Guide.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the Auto Scaling Group. By default generated by Pulumi. Conflicts with `name_prefix`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minElbCapacity',
        'Setting this causes Pulumi to wait for\nthis number of instances from this Auto Scaling Group to show up healthy in the\nELB only on creation. Updates will not wait on ELB instance number changes.\n(See also Waiting for Capacity below.)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ignoreFailedScalingActivities',
        'Whether to ignore failed [Auto Scaling scaling activities](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html) while waiting for capacity. The default is `false` -- failed scaling activities cause errors to be returned.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDeleteWarmPool',
        'Allows deleting the Auto Scaling Group without waiting for all instances in the warm pool to terminate.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'trafficSources',
        'Attaches one or more traffic sources to the specified Auto Scaling group.',
        () => autoscaling_GroupTrafficSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'healthCheckGracePeriod',
        'Time (in seconds) after instance comes into service before checking health.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'terminationPolicies',
        'List of policies to decide how the instances in the Auto Scaling Group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`. Additionally, the ARN of a Lambda function can be specified for custom termination policies.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'availabilityZones',
        'A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `vpc_zone_identifier` attribute, or for attaching a network interface when an existing network interface ID is specified in a launch template. Conflicts with `vpc_zone_identifier`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'initialLifecycleHooks',
        'One or more\n[Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)\nto attach to the Auto Scaling Group **before** instances are launched. The\nsyntax is exactly the same as the separate\n`aws.autoscaling.LifecycleHook`\nresource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating\na new Auto Scaling Group. For all other use-cases, please use `aws.autoscaling.LifecycleHook` resource.',
        () => autoscaling_GroupInitialLifecycleHook_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceMaintenancePolicy',
        'If this block is configured, add a instance maintenance policy to the specified Auto Scaling group. Defined below.',
        () => autoscaling_GroupInstanceMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'healthCheckType',
        '"EC2" or "ELB". Controls how health checking is done.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'defaultCooldown',
        'Amount of time, in seconds, after a scaling activity completes before another scaling activity can start.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
