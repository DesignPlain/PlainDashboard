import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codebuild_ProjectSecondarySourceVersion {
  // An identifier for a source in the build project.
  sourceIdentifier?: string;

  // The source version for the corresponding source identifier. See [AWS docs](https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ProjectSourceVersion.html#CodeBuild-Type-ProjectSourceVersion-sourceVersion) for more details.
  sourceVersion?: string;
}

export function codebuild_ProjectSecondarySourceVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceIdentifier",
      "An identifier for a source in the build project.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceVersion",
      "The source version for the corresponding source identifier. See [AWS docs](https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ProjectSourceVersion.html#CodeBuild-Type-ProjectSourceVersion-sourceVersion) for more details.",
      () => [],
      true,
      false,
    ),
  ];
}
