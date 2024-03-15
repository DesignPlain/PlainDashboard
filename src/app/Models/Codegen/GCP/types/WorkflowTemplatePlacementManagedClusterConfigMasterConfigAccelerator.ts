export interface WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator {
  // The number of the accelerator cards of this type exposed to this instance.
  AcceleratorCount?: number;

  // Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  AcceleratorType?: string;
}