import { RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization } from "./RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization";
import { RegionAutoscalerAutoscalingPolicyMetric } from "./RegionAutoscalerAutoscalingPolicyMetric";
import { RegionAutoscalerAutoscalingPolicyScalingSchedule } from "./RegionAutoscalerAutoscalingPolicyScalingSchedule";
import { RegionAutoscalerAutoscalingPolicyCpuUtilization } from "./RegionAutoscalerAutoscalingPolicyCpuUtilization";
import { RegionAutoscalerAutoscalingPolicyScaleDownControl } from "./RegionAutoscalerAutoscalingPolicyScaleDownControl";
import { RegionAutoscalerAutoscalingPolicyScaleInControl } from "./RegionAutoscalerAutoscalingPolicyScaleInControl";

export interface RegionAutoscalerAutoscalingPolicy {
  /*
Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.
Structure is documented below.
*/
  ScalingSchedules?: Array<RegionAutoscalerAutoscalingPolicyScalingSchedule>;

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
  CpuUtilization?: RegionAutoscalerAutoscalingPolicyCpuUtilization;

  // Defines operating mode for this policy.
  Mode?: string;

  /*
The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
*/
  MinReplicas?: number;

  /*
Defines scale down controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  ScaleDownControl?: RegionAutoscalerAutoscalingPolicyScaleDownControl;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  ScaleInControl?: RegionAutoscalerAutoscalingPolicyScaleInControl;

  /*
Configuration parameters of autoscaling based on a load balancer.
Structure is documented below.
*/
  LoadBalancingUtilization?: RegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;

  /*
The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
*/
  MaxReplicas?: number;

  /*
Configuration parameters of autoscaling based on a custom metric.
Structure is documented below.
*/
  Metrics?: Array<RegionAutoscalerAutoscalingPolicyMetric>;
}
