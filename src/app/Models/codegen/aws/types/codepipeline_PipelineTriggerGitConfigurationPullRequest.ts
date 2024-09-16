import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codepipeline_PipelineTriggerGitConfigurationPullRequestBranches,
  codepipeline_PipelineTriggerGitConfigurationPullRequestBranches_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPullRequestBranches';
import {
  codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths,
  codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths';

export interface codepipeline_PipelineTriggerGitConfigurationPullRequest {
  // The field that specifies to filter on branches for the pull request trigger configuration. A `branches` block is documented below.
  branches?: codepipeline_PipelineTriggerGitConfigurationPullRequestBranches;

  // A list that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration. Possible values are `OPEN`, `UPDATED ` and `CLOSED`.
  events?: Array<string>;

  // The field that specifies to filter on file paths for the pull request trigger configuration. A `file_paths` block is documented below.
  filePaths?: codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths;
}

export function codepipeline_PipelineTriggerGitConfigurationPullRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'branches',
      'The field that specifies to filter on branches for the pull request trigger configuration. A `branches` block is documented below.',
      () =>
        codepipeline_PipelineTriggerGitConfigurationPullRequestBranches_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'events',
      'A list that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration. Possible values are `OPEN`, `UPDATED ` and `CLOSED`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'filePaths',
      'The field that specifies to filter on file paths for the pull request trigger configuration. A `file_paths` block is documented below.',
      () =>
        codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths_GetTypes(),
      false,
      false,
    ),
  ];
}
