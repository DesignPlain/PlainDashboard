import { FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit } from "./FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit";
import { FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci } from "./FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci";

export interface FeatureFleetDefaultMemberConfigConfigmanagementConfigSync {
  /*
Git repo configuration for the cluster
Structure is documented below.
*/
  Git?: FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit;

  /*
OCI repo configuration for the cluster
Structure is documented below.
*/
  Oci?: FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci;

  // Specifies whether the Config Sync Repo is in hierarchical or unstructured mode
  SourceFormat?: string;
}
