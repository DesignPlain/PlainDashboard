import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction {
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

export function Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ArtifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Destination",
      "Directory to extract archive to. Defaults to / on Linux or C:\\ on Windows.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of the archive to extract.\nPossible values are: `TAR`, `TAR_GZIP`, `TAR_BZIP`, `TAR_LZMA`, `TAR_XZ`, `ZIP`.",
      [],
      true,
      false,
    ),
  ];
}
