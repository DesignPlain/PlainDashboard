import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_GuestPoliciesRecipeArtifactGcs,
  osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes,
} from "./osconfig_GuestPoliciesRecipeArtifactGcs";
import {
  osconfig_GuestPoliciesRecipeArtifactRemote,
  osconfig_GuestPoliciesRecipeArtifactRemote_GetTypes,
} from "./osconfig_GuestPoliciesRecipeArtifactRemote";

export interface osconfig_GuestPoliciesRecipeArtifact {
  /*
Defaults to false. When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified.
*/
  allowInsecure?: boolean;

  /*
A Google Cloud Storage artifact.
Structure is documented below.
*/
  gcs?: osconfig_GuestPoliciesRecipeArtifactGcs;

  /*
Id of the artifact, which the installation and update steps of this recipe can reference.
Artifacts in a recipe cannot have the same id.
*/
  id?: string;

  /*
A generic remote artifact.
Structure is documented below.
*/
  remote?: osconfig_GuestPoliciesRecipeArtifactRemote;
}

export function osconfig_GuestPoliciesRecipeArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInsecure",
      "Defaults to false. When false, recipes are subject to validations based on the artifact type:\nRemote: A checksum must be specified, and only protocols with transport-layer security are permitted.\nGCS: An object generation number must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcs",
      "A Google Cloud Storage artifact.\nStructure is documented below.",
      osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Id of the artifact, which the installation and update steps of this recipe can reference.\nArtifacts in a recipe cannot have the same id.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "remote",
      "A generic remote artifact.\nStructure is documented below.",
      osconfig_GuestPoliciesRecipeArtifactRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
