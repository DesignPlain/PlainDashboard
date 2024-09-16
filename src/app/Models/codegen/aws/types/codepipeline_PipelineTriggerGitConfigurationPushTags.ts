import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codepipeline_PipelineTriggerGitConfigurationPushTags {
  // A list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
  includes?: Array<string>;

  // A list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
  excludes?: Array<string>;
}

export function codepipeline_PipelineTriggerGitConfigurationPushTags_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'excludes',
      'A list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includes',
      'A list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
