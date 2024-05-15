import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesRecipeArtifactGcs,
  Osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeArtifactGcs";
import {
  Osconfig_GuestPoliciesRecipeArtifactRemote,
  Osconfig_GuestPoliciesRecipeArtifactRemote_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeArtifactRemote";

export interface Osconfig_GuestPoliciesRecipeArtifact {
  /*
Defaults to false. When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified.
*/
  AllowInsecure?: boolean;

  /*
A Google Cloud Storage artifact.
Structure is documented below.
*/
  Gcs?: Osconfig_GuestPoliciesRecipeArtifactGcs;

  /*
Id of the artifact, which the installation and update steps of this recipe can reference.
Artifacts in a recipe cannot have the same id.
*/
  Id?: string;

  /*
A generic remote artifact.
Structure is documented below.
*/
  Remote?: Osconfig_GuestPoliciesRecipeArtifactRemote;
}

export function Osconfig_GuestPoliciesRecipeArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Remote",
      "A generic remote artifact.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeArtifactRemote_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowInsecure",
      "Defaults to false. When false, recipes are subject to validations based on the artifact type:\nRemote: A checksum must be specified, and only protocols with transport-layer security are permitted.\nGCS: An object generation number must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gcs",
      "A Google Cloud Storage artifact.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "Id of the artifact, which the installation and update steps of this recipe can reference.\nArtifacts in a recipe cannot have the same id.",
      [],
      true,
      false,
    ),
  ];
}
