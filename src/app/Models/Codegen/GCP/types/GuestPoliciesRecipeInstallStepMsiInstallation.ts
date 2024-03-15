export interface GuestPoliciesRecipeInstallStepMsiInstallation {
  // The flags to use when installing the MSI. Defaults to the install flag.
  Flags?: Array<string>;

  // Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  AllowedExitCodes?: Array<number>;

  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;
}
