import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codepipeline_PipelineTriggerGitConfiguration,
  codepipeline_PipelineTriggerGitConfiguration_GetTypes,
} from "./codepipeline_PipelineTriggerGitConfiguration";

export interface codepipeline_PipelineTrigger {
  // Provides the filter criteria and the source stage for the repository event that starts the pipeline. For more information, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-filter.html). A `git_configuration` block is documented below.
  gitConfiguration?: codepipeline_PipelineTriggerGitConfiguration;

  // The source provider for the event. Possible value is `CodeStarSourceConnection`.
  providerType?: string;
}

export function codepipeline_PipelineTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gitConfiguration",
      "Provides the filter criteria and the source stage for the repository event that starts the pipeline. For more information, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-filter.html). A `git_configuration` block is documented below.",
      codepipeline_PipelineTriggerGitConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "providerType",
      "The source provider for the event. Possible value is `CodeStarSourceConnection`.",
      [],
      true,
      false,
    ),
  ];
}
