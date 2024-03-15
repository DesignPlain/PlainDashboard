export interface GuestPoliciesRecipeInstallStepFileExec {
  // The absolute path of the file on the local filesystem.
  LocalPath?: string;

  // A list of possible return values that the program can return to indicate a success. Defaults to [0].
  AllowedExitCodes?: string;

  // Arguments to be passed to the provided executable.
  Args?: Array<string>;

  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;
}
