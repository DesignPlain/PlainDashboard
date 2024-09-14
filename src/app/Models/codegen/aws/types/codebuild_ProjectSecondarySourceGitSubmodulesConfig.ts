import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codebuild_ProjectSecondarySourceGitSubmodulesConfig {
  // Whether to fetch Git submodules for the AWS CodeBuild build project.
  fetchSubmodules?: boolean;
}

export function codebuild_ProjectSecondarySourceGitSubmodulesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "fetchSubmodules",
      "Whether to fetch Git submodules for the AWS CodeBuild build project.",
      () => [],
      true,
      false,
    ),
  ];
}
