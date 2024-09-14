import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit {
  // Relative path from the repository root to the Skaffold file.
  path?: string;

  // Git ref the package should be cloned from.
  ref?: string;

  // Git repository the package should be cloned from.
  repo?: string;
}

export function clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repo",
      "Git repository the package should be cloned from.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Relative path from the repository root to the Skaffold file.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ref",
      "Git ref the package should be cloned from.",
      () => [],
      false,
      false,
    ),
  ];
}
