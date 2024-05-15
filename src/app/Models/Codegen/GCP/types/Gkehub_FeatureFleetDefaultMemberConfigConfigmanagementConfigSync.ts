import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit,
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit";
import {
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci,
  Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci";

export interface Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync {
  /*
Git repo configuration for the cluster
Structure is documented below.
*/
  Git?: Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit;

  /*
OCI repo configuration for the cluster
Structure is documented below.
*/
  Oci?: Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci;

  // Specifies whether the Config Sync Repo is in hierarchical or unstructured mode
  SourceFormat?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSync_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Git",
      "Git repo configuration for the cluster\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Oci",
      "OCI repo configuration for the cluster\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceFormat",
      "Specifies whether the Config Sync Repo is in hierarchical or unstructured mode",
      [],
      false,
      false,
    ),
  ];
}
