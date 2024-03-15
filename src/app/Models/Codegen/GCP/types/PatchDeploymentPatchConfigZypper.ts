export interface PatchDeploymentPatchConfigZypper {
  // Adds the --with-optional flag to zypper patch.
  WithOptional?: boolean;

  // Adds the --with-update flag, to zypper patch.
  WithUpdate?: boolean;

  // Install only patches with these categories. Common categories include security, recommended, and feature.
  Categories?: Array<string>;

  // List of packages to exclude from update.
  Excludes?: Array<string>;

  /*
An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.
*/
  ExclusivePatches?: Array<string>;

  // Install only patches with these severities. Common severities include critical, important, moderate, and low.
  Severities?: Array<string>;
}
