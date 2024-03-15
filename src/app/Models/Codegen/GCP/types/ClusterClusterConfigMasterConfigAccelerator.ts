export interface ClusterClusterConfigMasterConfigAccelerator {
  /*
The number of the accelerator cards of this type exposed to this instance. Often restricted to one of `1`, `2`, `4`, or `8`.


- - -
*/
  AcceleratorCount?: number;

  // The short name of the accelerator type to expose to this instance. For example, `nvidia-tesla-k80`.
  AcceleratorType?: string;
}
