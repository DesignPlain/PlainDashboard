export interface GuestPoliciesRecipeUpdateStepArchiveExtraction {
  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;

  // Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  Destination?: string;

  /*
The type of the archive to extract.
Possible values are: `TAR`, `TAR_GZIP`, `TAR_BZIP`, `TAR_LZMA`, `TAR_XZ`, `ZIP`.
*/
  Type?: string;
}
