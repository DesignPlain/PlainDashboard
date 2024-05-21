import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit {
  // Git ref the package should be cloned from.
  ref?: string;

  // Git repository the package should be cloned from.
  repo?: string;

  // Relative path from the repository root to the Skaffold file.
  path?: string;
}

export function clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repo",
      "Git repository the package should be cloned from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Relative path from the repository root to the Skaffold file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ref",
      "Git ref the package should be cloned from.",
      [],
      false,
      false,
    ),
  ];
}
