import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization,
  compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization";
import {
  compute_RegionAutoscalerAutoscalingPolicyScalingSchedule,
  compute_RegionAutoscalerAutoscalingPolicyScalingSchedule_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyScalingSchedule";
import {
  compute_RegionAutoscalerAutoscalingPolicyCpuUtilization,
  compute_RegionAutoscalerAutoscalingPolicyCpuUtilization_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyCpuUtilization";
import {
  compute_RegionAutoscalerAutoscalingPolicyMetric,
  compute_RegionAutoscalerAutoscalingPolicyMetric_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyMetric";
import {
  compute_RegionAutoscalerAutoscalingPolicyScaleDownControl,
  compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyScaleDownControl";
import {
  compute_RegionAutoscalerAutoscalingPolicyScaleInControl,
  compute_RegionAutoscalerAutoscalingPolicyScaleInControl_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyScaleInControl";

export interface compute_RegionAutoscalerAutoscalingPolicy {
  /*
The number of seconds that the autoscaler should wait before it
starts collecting information from a new instance. This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.
Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.
*/
  cooldownPeriod?: number;

  /*
Configuration parameters of autoscaling based on a load balancer.
Structure is documented below.
*/
  loadBalancingUtilization?: compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;

  /*
The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
*/
  maxReplicas?: number;

  /*
The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
*/
  minReplicas?: number;

  /*
Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.
Structure is documented below.
*/
  scalingSchedules?: Array<compute_RegionAutoscalerAutoscalingPolicyScalingSchedule>;

  /*
Defines the CPU utilization policy that allows the autoscaler to
scale based on the average CPU utilization of a managed instance
group.
Structure is documented below.
*/
  cpuUtilization?: compute_RegionAutoscalerAutoscalingPolicyCpuUtilization;

  /*
Configuration parameters of autoscaling based on a custom metric.
Structure is documented below.
*/
  metrics?: Array<compute_RegionAutoscalerAutoscalingPolicyMetric>;

  // Defines operating mode for this policy.
  mode?: string;

  /*
Defines scale down controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  scaleDownControl?: compute_RegionAutoscalerAutoscalingPolicyScaleDownControl;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  scaleInControl?: compute_RegionAutoscalerAutoscalingPolicyScaleInControl;
}

export function compute_RegionAutoscalerAutoscalingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metrics",
      "Configuration parameters of autoscaling based on a custom metric.\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cooldownPeriod",
      "The number of seconds that the autoscaler should wait before it\nstarts collecting information from a new instance. This prevents\nthe autoscaler from collecting information when the instance is\ninitializing, during which the collected usage would not be\nreliable. The default time autoscaler waits is 60 seconds.\nVirtual machine initialization times might vary because of\nnumerous factors. We recommend that you test how long an\ninstance may take to initialize. To do this, create an instance\nand time the startup process.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loadBalancingUtilization",
      "Configuration parameters of autoscaling based on a load balancer.\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxReplicas",
      "The maximum number of instances that the autoscaler can scale up\nto. This is required when creating or updating an autoscaler. The\nmaximum number of replicas should not be lower than minimal number\nof replicas.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cpuUtilization",
      "Defines the CPU utilization policy that allows the autoscaler to\nscale based on the average CPU utilization of a managed instance\ngroup.\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyCpuUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleInControl",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyScaleInControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minReplicas",
      "The minimum number of replicas that the autoscaler can scale down\nto. This cannot be less than 0. If not provided, autoscaler will\nchoose a default value depending on maximum number of instances\nallowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scalingSchedules",
      "Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyScalingSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Defines operating mode for this policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleDownControl",
      "Defines scale down controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes(),
      false,
      false,
    ),
  ];
}
