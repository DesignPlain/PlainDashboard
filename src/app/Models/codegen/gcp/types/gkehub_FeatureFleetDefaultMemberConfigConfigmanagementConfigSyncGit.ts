import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit {
  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  gcpServiceAccountEmail?: string;

  // URL for the HTTPS Proxy to be used when communicating with the Git repo
  httpsProxy?: string;

  // The path within the Git repository that represents the top level of the repo to sync
  policyDir?: string;

  // Type of secret configured for access to the Git repo
  secretType?: string;

  // The branch of the repository to sync from. Default: master
  syncBranch?: string;

  // The URL of the Git repository to use as the source of truth
  syncRepo?: string;

  // Git revision (tag or hash) to check out. Default HEAD
  syncRev?: string;

  // Period in seconds between consecutive syncs. Default: 15
  syncWaitSecs?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "syncRev",
      "Git revision (tag or hash) to check out. Default HEAD",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncWaitSecs",
      "Period in seconds between consecutive syncs. Default: 15",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcpServiceAccountEmail",
      "The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpsProxy",
      "URL for the HTTPS Proxy to be used when communicating with the Git repo",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyDir",
      "The path within the Git repository that represents the top level of the repo to sync",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretType",
      "Type of secret configured for access to the Git repo",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncBranch",
      "The branch of the repository to sync from. Default: master",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncRepo",
      "The URL of the Git repository to use as the source of truth",
      () => [],
      false,
      false,
    ),
  ];
}
