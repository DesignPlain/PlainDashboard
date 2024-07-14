import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FeatureMembershipConfigmanagementBinauthz,
  gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes,
} from "./gkehub_FeatureMembershipConfigmanagementBinauthz";
import {
  gkehub_FeatureMembershipConfigmanagementConfigSync,
  gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes,
} from "./gkehub_FeatureMembershipConfigmanagementConfigSync";
import {
  gkehub_FeatureMembershipConfigmanagementHierarchyController,
  gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes,
} from "./gkehub_FeatureMembershipConfigmanagementHierarchyController";
import {
  gkehub_FeatureMembershipConfigmanagementPolicyController,
  gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes,
} from "./gkehub_FeatureMembershipConfigmanagementPolicyController";

export interface gkehub_FeatureMembershipConfigmanagement {
  // Binauthz configuration for the cluster. Structure is documented below.
  binauthz?: gkehub_FeatureMembershipConfigmanagementBinauthz;

  // Config Sync configuration for the cluster. Structure is documented below.
  configSync?: gkehub_FeatureMembershipConfigmanagementConfigSync;

  // Hierarchy Controller configuration for the cluster. Structure is documented below.
  hierarchyController?: gkehub_FeatureMembershipConfigmanagementHierarchyController;

  // Policy Controller configuration for the cluster. Structure is documented below.
  policyController?: gkehub_FeatureMembershipConfigmanagementPolicyController;

  // Version of ACM installed.
  version?: string;
}

export function gkehub_FeatureMembershipConfigmanagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "policyController",
      "Policy Controller configuration for the cluster. Structure is documented below.",
      gkehub_FeatureMembershipConfigmanagementPolicyController_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of ACM installed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "binauthz",
      "Binauthz configuration for the cluster. Structure is documented below.",
      gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configSync",
      "Config Sync configuration for the cluster. Structure is documented below.",
      gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hierarchyController",
      "Hierarchy Controller configuration for the cluster. Structure is documented below.",
      gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes(),
      false,
      false,
    ),
  ];
}
