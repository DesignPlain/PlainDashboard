export interface FeatureMembershipConfigmanagementConfigSyncOci {
  // The absolute path of the directory that contains the local resources. Default: the root directory of the image.
  PolicyDir?: string;

  // Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none.
  SecretType?: string;

  // The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
  SyncRepo?: string;

  // Period in seconds(int64 format) between consecutive syncs. Default: 15.
  SyncWaitSecs?: string;

  // The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
  GcpServiceAccountEmail?: string;
}
