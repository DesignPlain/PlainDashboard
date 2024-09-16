import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codebuild_WebhookScopeConfiguration {
  // The name of either the enterprise or organization.
  name?: string;

  // The type of scope for a GitHub webhook. Valid values for this parameter are: `GITHUB_ORGANIZATION`, `GITHUB_GLOBAL`.
  scope?: string;

  // The domain of the GitHub Enterprise organization. Required if your project's source type is GITHUB_ENTERPRISE.
  domain?: string;
}

export function codebuild_WebhookScopeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domain',
      "The domain of the GitHub Enterprise organization. Required if your project's source type is GITHUB_ENTERPRISE.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of either the enterprise or organization.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scope',
      'The type of scope for a GitHub webhook. Valid values for this parameter are: `GITHUB_ORGANIZATION`, `GITHUB_GLOBAL`.',
      () => [],
      true,
      false,
    ),
  ];
}
