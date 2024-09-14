import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codepipeline_PipelineTriggerGitConfiguration,
  codepipeline_PipelineTriggerGitConfiguration_GetTypes,
} from "./codepipeline_PipelineTriggerGitConfiguration";

export interface codepipeline_PipelineTrigger {
  // The source provider for the event. Possible value is `CodeStarSourceConnection`.
  providerType?: string;

  // Provides the filter criteria and the source stage for the repository event that starts the pipeline. For more information, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-filter.html). A `git_configuration` block is documented below.
  gitConfiguration?: codepipeline_PipelineTriggerGitConfiguration;
}

export function codepipeline_PipelineTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "providerType",
      "The source provider for the event. Possible value is `CodeStarSourceConnection`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gitConfiguration",
      "Provides the filter criteria and the source stage for the repository event that starts the pipeline. For more information, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-filter.html). A `git_configuration` block is documented below.",
      () => codepipeline_PipelineTriggerGitConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
