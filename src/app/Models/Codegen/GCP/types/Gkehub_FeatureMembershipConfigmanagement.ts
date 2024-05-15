import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipConfigmanagementPolicyController,
  Gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementPolicyController";
import {
  Gkehub_FeatureMembershipConfigmanagementBinauthz,
  Gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementBinauthz";
import {
  Gkehub_FeatureMembershipConfigmanagementConfigSync,
  Gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementConfigSync";
import {
  Gkehub_FeatureMembershipConfigmanagementHierarchyController,
  Gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementHierarchyController";

export interface Gkehub_FeatureMembershipConfigmanagement {
  // Policy Controller configuration for the cluster. Structure is documented below.
  PolicyController?: Gkehub_FeatureMembershipConfigmanagementPolicyController;

  // Version of ACM installed.
  Version?: string;

  // Binauthz configuration for the cluster. Structure is documented below.
  Binauthz?: Gkehub_FeatureMembershipConfigmanagementBinauthz;

  // Config Sync configuration for the cluster. Structure is documented below.
  ConfigSync?: Gkehub_FeatureMembershipConfigmanagementConfigSync;

  // Hierarchy Controller configuration for the cluster. Structure is documented below.
  HierarchyController?: Gkehub_FeatureMembershipConfigmanagementHierarchyController;
}

export function Gkehub_FeatureMembershipConfigmanagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PolicyController",
      "Policy Controller configuration for the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of ACM installed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Binauthz",
      "Binauthz configuration for the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfigSync",
      "Config Sync configuration for the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HierarchyController",
      "Hierarchy Controller configuration for the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes(),
      false,
      false,
    ),
  ];
}
