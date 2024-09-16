import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codepipeline_PipelineTriggerGitConfigurationPullRequest,
  codepipeline_PipelineTriggerGitConfigurationPullRequest_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPullRequest';
import {
  codepipeline_PipelineTriggerGitConfigurationPush,
  codepipeline_PipelineTriggerGitConfigurationPush_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPush';

export interface codepipeline_PipelineTriggerGitConfiguration {
  // The field where the repository event that will start the pipeline is specified as pull requests. A `pull_request` block is documented below.
  pullRequests?: Array<codepipeline_PipelineTriggerGitConfigurationPullRequest>;

  // The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details. A `push` block is documented below.
  pushes?: Array<codepipeline_PipelineTriggerGitConfigurationPush>;

  // The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
  sourceActionName?: string;
}

export function codepipeline_PipelineTriggerGitConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'pullRequests',
      'The field where the repository event that will start the pipeline is specified as pull requests. A `pull_request` block is documented below.',
      () => codepipeline_PipelineTriggerGitConfigurationPullRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pushes',
      'The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details. A `push` block is documented below.',
      () => codepipeline_PipelineTriggerGitConfigurationPush_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceActionName',
      'The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.',
      () => [],
      true,
      false,
    ),
  ];
}
