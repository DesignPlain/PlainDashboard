import { FeatureFleetDefaultMemberConfigConfigmanagementConfigSync } from "./FeatureFleetDefaultMemberConfigConfigmanagementConfigSync";

export interface FeatureFleetDefaultMemberConfigConfigmanagement {
  // Version of ACM installed
  Version?: string;

  /*
ConfigSync configuration for the cluster
Structure is documented below.
*/
  ConfigSync?: FeatureFleetDefaultMemberConfigConfigmanagementConfigSync;
}
