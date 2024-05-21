import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureMembershipConfigmanagementConfigSyncGit {
  // The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
  gcpServiceAccountEmail?: string;

  // URL for the HTTPS proxy to be used when communicating with the Git repo.
  httpsProxy?: string;

  // The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
  policyDir?: string;

  // Type of secret configured for access to the Git repo.
  secretType?: string;

  // The branch of the repository to sync from. Default: master.
  syncBranch?: string;

  // The URL of the Git repository to use as the source of truth.
  syncRepo?: string;

  // Git revision (tag or hash) to check out. Default HEAD.
  syncRev?: string;

  // Period in seconds between consecutive syncs. Default: 15.
  syncWaitSecs?: string;
}

export function gkehub_FeatureMembershipConfigmanagementConfigSyncGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretType",
      "Type of secret configured for access to the Git repo.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncBranch",
      "The branch of the repository to sync from. Default: master.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncRepo",
      "The URL of the Git repository to use as the source of truth.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncRev",
      "Git revision (tag or hash) to check out. Default HEAD.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncWaitSecs",
      "Period in seconds between consecutive syncs. Default: 15.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcpServiceAccountEmail",
      "The GCP Service Account Email used for auth when secretType is gcpServiceAccount.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpsProxy",
      "URL for the HTTPS proxy to be used when communicating with the Git repo.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyDir",
      "The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.",
      [],
      false,
      false,
    ),
  ];
}
