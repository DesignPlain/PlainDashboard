export interface AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  /*
Specifies a fixed number of VM instances. This must be a positive
integer.
*/
  Fixed?: number;

  /*
Specifies a percentage of instances between 0 to 100%!!(MISSING),(MISSING) inclusive.
For example, specify 80 for 80%!!(MISSING)
(MISSING)
*/
  Percent?: number;
}
