import { getClusterMaintenancePolicyMaintenanceExclusionExclusionOption } from "./getClusterMaintenancePolicyMaintenanceExclusionExclusionOption";

export interface getClusterMaintenancePolicyMaintenanceExclusion {
  //
  EndTime?: string;

  //
  ExclusionName?: string;

  // Maintenance exclusion related options.
  ExclusionOptions?: Array<getClusterMaintenancePolicyMaintenanceExclusionExclusionOption>;

  //
  StartTime?: string;
}
