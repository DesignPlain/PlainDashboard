import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl,
  Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl";
import {
  Compute_RegionAutoscalerAutoscalingPolicyScalingSchedule,
  Compute_RegionAutoscalerAutoscalingPolicyScalingSchedule_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyScalingSchedule";
import {
  Compute_RegionAutoscalerAutoscalingPolicyScaleInControl,
  Compute_RegionAutoscalerAutoscalingPolicyScaleInControl_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyScaleInControl";
import {
  Compute_RegionAutoscalerAutoscalingPolicyCpuUtilization,
  Compute_RegionAutoscalerAutoscalingPolicyCpuUtilization_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyCpuUtilization";
import {
  Compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization,
  Compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization";
import {
  Compute_RegionAutoscalerAutoscalingPolicyMetric,
  Compute_RegionAutoscalerAutoscalingPolicyMetric_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyMetric";

export interface Compute_RegionAutoscalerAutoscalingPolicy {
  /*
The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
*/
  MaxReplicas?: number;

  /*
Defines scale down controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  ScaleDownControl?: Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl;

  /*
Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.
Structure is documented below.
*/
  ScalingSchedules?: Array<Compute_RegionAutoscalerAutoscalingPolicyScalingSchedule>;

  /*
The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
*/
  MinReplicas?: number;

  // Defines operating mode for this policy.
  Mode?: string;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  ScaleInControl?: Compute_RegionAutoscalerAutoscalingPolicyScaleInControl;

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
  CooldownPeriod?: number;

  /*
Defines the CPU utilization policy that allows the autoscaler to
scale based on the average CPU utilization of a managed instance
group.
Structure is documented below.
*/
  CpuUtilization?: Compute_RegionAutoscalerAutoscalingPolicyCpuUtilization;

  /*
Configuration parameters of autoscaling based on a load balancer.
Structure is documented below.
*/
  LoadBalancingUtilization?: Compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;

  /*
Configuration parameters of autoscaling based on a custom metric.
Structure is documented below.
*/
  Metrics?: Array<Compute_RegionAutoscalerAutoscalingPolicyMetric>;
}

export function Compute_RegionAutoscalerAutoscalingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ScaleDownControl",
      "Defines scale down controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ScalingSchedules",
      "Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyScalingSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CooldownPeriod",
      "The number of seconds that the autoscaler should wait before it\nstarts collecting information from a new instance. This prevents\nthe autoscaler from collecting information when the instance is\ninitializing, during which the collected usage would not be\nreliable. The default time autoscaler waits is 60 seconds.\nVirtual machine initialization times might vary because of\nnumerous factors. We recommend that you test how long an\ninstance may take to initialize. To do this, create an instance\nand time the startup process.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CpuUtilization",
      "Defines the CPU utilization policy that allows the autoscaler to\nscale based on the average CPU utilization of a managed instance\ngroup.\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyCpuUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoadBalancingUtilization",
      "Configuration parameters of autoscaling based on a load balancer.\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Metrics",
      "Configuration parameters of autoscaling based on a custom metric.\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxReplicas",
      "The maximum number of instances that the autoscaler can scale up\nto. This is required when creating or updating an autoscaler. The\nmaximum number of replicas should not be lower than minimal number\nof replicas.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinReplicas",
      "The minimum number of replicas that the autoscaler can scale down\nto. This cannot be less than 0. If not provided, autoscaler will\nchoose a default value depending on maximum number of instances\nallowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "Defines operating mode for this policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ScaleInControl",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyScaleInControl_GetTypes(),
      false,
      false,
    ),
  ];
}
