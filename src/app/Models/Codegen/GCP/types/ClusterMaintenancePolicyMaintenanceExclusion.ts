import { ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions } from "./ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions";

export interface ClusterMaintenancePolicyMaintenanceExclusion {
  // MaintenanceExclusionOptions provides maintenance exclusion related options.
  ExclusionOptions?: ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;

  //
  StartTime?: string;

  //
  EndTime?: string;

  //
  ExclusionName?: string;
}
