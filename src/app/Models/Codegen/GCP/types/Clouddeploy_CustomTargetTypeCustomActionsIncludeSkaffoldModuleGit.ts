import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit {
  // Relative path from the repository root to the Skaffold file.
  Path?: string;

  // Git ref the package should be cloned from.
  Ref?: string;

  // Git repository the package should be cloned from.
  Repo?: string;
}

export function Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Relative path from the repository root to the Skaffold file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ref",
      "Git ref the package should be cloned from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repo",
      "Git repository the package should be cloned from.",
      [],
      true,
      false,
    ),
  ];
}
