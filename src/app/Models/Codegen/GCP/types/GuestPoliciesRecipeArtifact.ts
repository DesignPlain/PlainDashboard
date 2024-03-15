import { GuestPoliciesRecipeArtifactGcs } from "./GuestPoliciesRecipeArtifactGcs";
import { GuestPoliciesRecipeArtifactRemote } from "./GuestPoliciesRecipeArtifactRemote";

export interface GuestPoliciesRecipeArtifact {
  /*
A Google Cloud Storage artifact.
Structure is documented below.
*/
  Gcs?: GuestPoliciesRecipeArtifactGcs;

  /*
Id of the artifact, which the installation and update steps of this recipe can reference.
Artifacts in a recipe cannot have the same id.
*/
  Id?: string;

  /*
A generic remote artifact.
Structure is documented below.
*/
  Remote?: GuestPoliciesRecipeArtifactRemote;

  /*
Defaults to false. When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified.
*/
  AllowInsecure?: boolean;
}
