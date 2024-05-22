import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_GuestPoliciesRecipeInstallStepFileExec {
  // A list of possible return values that the program can return to indicate a success. Defaults to [0].
  allowedExitCodes?: string;

  // Arguments to be passed to the provided executable.
  args?: Array<string>;

  // The id of the relevant artifact in the recipe.
  artifactId?: string;

  // The absolute path of the file on the local filesystem.
  localPath?: string;
}

export function osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "The absolute path of the file on the local filesystem.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allowedExitCodes",
      "A list of possible return values that the program can return to indicate a success. Defaults to [0].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments to be passed to the provided executable.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      false,
      false,
    ),
  ];
}
