import { FeatureMembershipConfigmanagementHierarchyController } from "./FeatureMembershipConfigmanagementHierarchyController";
import { FeatureMembershipConfigmanagementPolicyController } from "./FeatureMembershipConfigmanagementPolicyController";
import { FeatureMembershipConfigmanagementBinauthz } from "./FeatureMembershipConfigmanagementBinauthz";
import { FeatureMembershipConfigmanagementConfigSync } from "./FeatureMembershipConfigmanagementConfigSync";

export interface FeatureMembershipConfigmanagement {
  // Hierarchy Controller configuration for the cluster. Structure is documented below.
  HierarchyController?: FeatureMembershipConfigmanagementHierarchyController;

  // Policy Controller configuration for the cluster. Structure is documented below.
  PolicyController?: FeatureMembershipConfigmanagementPolicyController;

  // Version of ACM installed.
  Version?: string;

  // Binauthz configuration for the cluster. Structure is documented below.
  Binauthz?: FeatureMembershipConfigmanagementBinauthz;

  // Config Sync configuration for the cluster. Structure is documented below.
  ConfigSync?: FeatureMembershipConfigmanagementConfigSync;
}
