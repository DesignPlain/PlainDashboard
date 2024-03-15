export interface ServiceTemplateSpecVolumeCsi {
  /*
Unique name representing the type of file system to be created. Cloud Run supports the following values:
- gcsfuse.run.googleapis.com: Mount a Google Cloud Storage bucket using GCSFuse. This driver requires the
run.googleapis.com/execution-environment annotation to be set to "gen2" and
run.googleapis.com/launch-stage set to "BETA" or "ALPHA".
*/
  Driver?: string;

  // If true, all mounts created from this volume will be read-only.
  ReadOnly?: boolean;

  /*
Driver-specific attributes. The following options are supported for available drivers:
- gcsfuse.run.googleapis.com
- bucketName: The name of the Cloud Storage Bucket that backs this volume. The Cloud Run Service identity must have access to this bucket.

- - -
*/
  VolumeAttributes?: Map<string, string>;
}
