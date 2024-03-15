export interface CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage {
  // Relative path from the source to the Skaffold file.
  Path?: string;

  // Cloud Storage source paths to copy recursively. For example, providing `gs://my-bucket/dir/configs/-` will result in Skaffold copying all files within the `dir/configs` directory in the bucket `my-bucket`.
  Source?: string;
}
