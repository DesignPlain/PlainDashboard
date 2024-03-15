export interface PatchDeploymentPatchConfigYum {
  // List of packages to exclude from update. These packages will be excluded.
  Excludes?: Array<string>;

  /*
An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
*/
  ExclusivePackages?: Array<string>;

  // Will cause patch to run yum update-minimal instead.
  Minimal?: boolean;

  // Adds the --security flag to yum update. Not supported on all platforms.
  Security?: boolean;
}
