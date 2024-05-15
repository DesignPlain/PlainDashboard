import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit {
  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  GcpServiceAccountEmail?: string;

  // URL for the HTTPS Proxy to be used when communicating with the Git repo
  HttpsProxy?: string;

  // The path within the Git repository that represents the top level of the repo to sync
  PolicyDir?: string;

  // Type of secret configured for access to the Git repo
  SecretType?: string;

  // The branch of the repository to sync from. Default: master
  SyncBranch?: string;

  // The URL of the Git repository to use as the source of truth
  SyncRepo?: string;

  // Git revision (tag or hash) to check out. Default HEAD
  SyncRev?: string;

  // Period in seconds between consecutive syncs. Default: 15
  SyncWaitSecs?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PolicyDir",
      "The path within the Git repository that represents the top level of the repo to sync",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecretType",
      "Type of secret configured for access to the Git repo",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncBranch",
      "The branch of the repository to sync from. Default: master",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncRepo",
      "The URL of the Git repository to use as the source of truth",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncRev",
      "Git revision (tag or hash) to check out. Default HEAD",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncWaitSecs",
      "Period in seconds between consecutive syncs. Default: 15",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcpServiceAccountEmail",
      "The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HttpsProxy",
      "URL for the HTTPS Proxy to be used when communicating with the Git repo",
      [],
      false,
      false,
    ),
  ];
}
