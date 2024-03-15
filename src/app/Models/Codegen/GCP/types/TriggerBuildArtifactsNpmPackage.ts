export interface TriggerBuildArtifactsNpmPackage {
  // Path to the package.json. e.g. workspace/path/to/package
  PackagePath?: string;

  /*
Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"
Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
*/
  Repository?: string;
}
