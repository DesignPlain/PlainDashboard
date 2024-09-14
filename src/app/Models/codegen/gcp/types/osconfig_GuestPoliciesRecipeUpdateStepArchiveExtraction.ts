import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction {
  // The id of the relevant artifact in the recipe.
  artifactId?: string;

  // Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  destination?: string;

  /*
The type of the archive to extract.
Possible values are: `TAR`, `TAR_GZIP`, `TAR_BZIP`, `TAR_LZMA`, `TAR_XZ`, `ZIP`.
*/
  type?: string;
}

export function osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "The id of the relevant artifact in the recipe.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destination",
      "Directory to extract archive to. Defaults to / on Linux or C:\\ on Windows.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the archive to extract.\nPossible values are: `TAR`, `TAR_GZIP`, `TAR_BZIP`, `TAR_LZMA`, `TAR_XZ`, `ZIP`.",
      () => [],
      true,
      false,
    ),
  ];
}
