import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit,
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit";
import {
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci,
  gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci";

export interface gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync {
  /*
Git repo configuration for the cluster
Structure is documented below.
*/
  git?: gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit;

  /*
OCI repo configuration for the cluster
Structure is documented below.
*/
  oci?: gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci;

  // Specifies whether the Config Sync Repo is in hierarchical or unstructured mode
  sourceFormat?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oci",
      "OCI repo configuration for the cluster\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFormat",
      "Specifies whether the Config Sync Repo is in hierarchical or unstructured mode",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "git",
      "Git repo configuration for the cluster\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes(),
      false,
      false,
    ),
  ];
}
