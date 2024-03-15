export interface FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit {
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

  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  GcpServiceAccountEmail?: string;

  // URL for the HTTPS Proxy to be used when communicating with the Git repo
  HttpsProxy?: string;
}
