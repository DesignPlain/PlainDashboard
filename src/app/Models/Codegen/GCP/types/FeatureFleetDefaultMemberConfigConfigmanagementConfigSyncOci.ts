export interface FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci {
  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  GcpServiceAccountEmail?: string;

  // The absolute path of the directory that contains the local resources. Default: the root directory of the image
  PolicyDir?: string;

  // Type of secret configured for access to the Git repo
  SecretType?: string;

  // The OCI image repository URL for the package to sync from
  SyncRepo?: string;

  // Period in seconds between consecutive syncs. Default: 15
  SyncWaitSecs?: string;

  /*
(Optional, Deprecated)
Version of ACM installed

> --Warning:-- The `configmanagement.config_sync.oci.version` field is deprecated and will be removed in a future major release. Please use `configmanagement.version` field to specify the version of ACM installed instead.
*/
  Version?: string;
}
