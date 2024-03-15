export interface GuestPoliciesRecipeUpdateStepFileExec {
  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;

  // The absolute path of the file on the local filesystem.
  LocalPath?: string;

  // A list of possible return values that the program can return to indicate a success. Defaults to [0].
  AllowedExitCodes?: Array<number>;

  // Arguments to be passed to the provided executable.
  Args?: Array<string>;
}
