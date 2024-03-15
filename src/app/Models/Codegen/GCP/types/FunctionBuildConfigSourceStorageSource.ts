export interface FunctionBuildConfigSourceStorageSource {
  // Google Cloud Storage bucket containing the source
  Bucket?: string;

  /*
Google Cloud Storage generation for the object. If the generation
is omitted, the latest generation will be used.
*/
  Generation?: number;

  // Google Cloud Storage object containing the source.
  Object?: string;
}
