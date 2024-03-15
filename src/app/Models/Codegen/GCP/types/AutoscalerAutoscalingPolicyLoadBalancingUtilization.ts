export interface AutoscalerAutoscalingPolicyLoadBalancingUtilization {
  /*
Fraction of backend capacity utilization (set in HTTP(s) load
balancing configuration) that autoscaler should maintain. Must
be a positive float value. If not defined, the default is 0.8.
*/
  Target?: number;
}
