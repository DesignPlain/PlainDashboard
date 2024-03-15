export interface TriggerBuildSourceStorageSource {
  // Google Cloud Storage bucket containing the source.
  Bucket?: string;

  /*
Google Cloud Storage generation for the object.
If the generation is omitted, the latest generation will be used
*/
  Generation?: string;

  /*
Google Cloud Storage object containing the source.
This object must be a gzipped archive file (.tar.gz) containing source to build.
*/
  Object?: string;
}
