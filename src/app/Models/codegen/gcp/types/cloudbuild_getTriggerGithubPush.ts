import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudbuild_getTriggerGithubPush {
  // When true, only trigger a build if the revision regex does NOT match the git_ref regex.
  invertRegex?: boolean;

  // Regex of tags to match.  Specify only one of branch or tag.
  tag?: string;

  // Regex of branches to match.  Specify only one of branch or tag.
  branch?: string;
}

export function cloudbuild_getTriggerGithubPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'invertRegex',
      'When true, only trigger a build if the revision regex does NOT match the git_ref regex.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tag',
      'Regex of tags to match.  Specify only one of branch or tag.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'branch',
      'Regex of branches to match.  Specify only one of branch or tag.',
      () => [],
      true,
      false,
    ),
  ];
}
