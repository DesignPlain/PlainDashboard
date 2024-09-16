import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codepipeline_PipelineTriggerGitConfigurationPushTags,
  codepipeline_PipelineTriggerGitConfigurationPushTags_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPushTags';
import {
  codepipeline_PipelineTriggerGitConfigurationPushBranches,
  codepipeline_PipelineTriggerGitConfigurationPushBranches_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPushBranches';
import {
  codepipeline_PipelineTriggerGitConfigurationPushFilePaths,
  codepipeline_PipelineTriggerGitConfigurationPushFilePaths_GetTypes,
} from './codepipeline_PipelineTriggerGitConfigurationPushFilePaths';

export interface codepipeline_PipelineTriggerGitConfigurationPush {
  // The field that contains the details for the Git tags trigger configuration. A `tags` block is documented below.
  tags?: codepipeline_PipelineTriggerGitConfigurationPushTags;

  // The field that specifies to filter on branches for the push trigger configuration. A `branches` block is documented below.
  branches?: codepipeline_PipelineTriggerGitConfigurationPushBranches;

  // The field that specifies to filter on file paths for the push trigger configuration. A `file_paths` block is documented below.
  filePaths?: codepipeline_PipelineTriggerGitConfigurationPushFilePaths;
}

export function codepipeline_PipelineTriggerGitConfigurationPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'The field that contains the details for the Git tags trigger configuration. A `tags` block is documented below.',
      () => codepipeline_PipelineTriggerGitConfigurationPushTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'branches',
      'The field that specifies to filter on branches for the push trigger configuration. A `branches` block is documented below.',
      () => codepipeline_PipelineTriggerGitConfigurationPushBranches_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'filePaths',
      'The field that specifies to filter on file paths for the push trigger configuration. A `file_paths` block is documented below.',
      () =>
        codepipeline_PipelineTriggerGitConfigurationPushFilePaths_GetTypes(),
      false,
      false,
    ),
  ];
}
