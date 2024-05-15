import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeInstallStepFileExec {
  // A list of possible return values that the program can return to indicate a success. Defaults to [0].
  AllowedExitCodes?: string;

  // Arguments to be passed to the provided executable.
  Args?: Array<string>;

  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;

  // The absolute path of the file on the local filesystem.
  LocalPath?: string;
}

export function Osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AllowedExitCodes",
      "A list of possible return values that the program can return to indicate a success. Defaults to [0].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments to be passed to the provided executable.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArtifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocalPath",
      "The absolute path of the file on the local filesystem.",
      [],
      false,
      false,
    ),
  ];
}
