import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codepipeline_PipelineTriggerGitConfigurationPushBranches {
  // A list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
  excludes?: Array<string>;

  // A list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
  includes?: Array<string>;
}

export function codepipeline_PipelineTriggerGitConfigurationPushBranches_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludes",
      "A list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includes",
      "A list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
