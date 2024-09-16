import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface amplify_AppAutoBranchCreationConfig {
  // Basic authorization credentials for the autocreated branch.
  basicAuthCredentials?: string;

  // Build specification (build spec) for the autocreated branch.
  buildSpec?: string;

  // Enables performance mode for the branch.
  enablePerformanceMode?: boolean;

  // Enables pull request previews for the autocreated branch.
  enablePullRequestPreview?: boolean;

  // Environment variables for the autocreated branch.
  environmentVariables?: Map<string, string>;

  // Amplify environment name for the pull request.
  pullRequestEnvironmentName?: string;

  // Describes the current stage for the autocreated branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`.
  stage?: string;

  // Enables auto building for the autocreated branch.
  enableAutoBuild?: boolean;

  // Enables basic authorization for the autocreated branch.
  enableBasicAuth?: boolean;

  // Framework for the autocreated branch.
  framework?: string;
}

export function amplify_AppAutoBranchCreationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'framework',
      'Framework for the autocreated branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'basicAuthCredentials',
      'Basic authorization credentials for the autocreated branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'buildSpec',
      'Build specification (build spec) for the autocreated branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePerformanceMode',
      'Enables performance mode for the branch.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePullRequestPreview',
      'Enables pull request previews for the autocreated branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'environmentVariables',
      'Environment variables for the autocreated branch.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stage',
      'Describes the current stage for the autocreated branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pullRequestEnvironmentName',
      'Amplify environment name for the pull request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableAutoBuild',
      'Enables auto building for the autocreated branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableBasicAuth',
      'Enables basic authorization for the autocreated branch.',
      () => [],
      false,
      false,
    ),
  ];
}
