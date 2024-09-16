import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudbuildv2_ConnectionGithubConfigAuthorizerCredential,
  cloudbuildv2_ConnectionGithubConfigAuthorizerCredential_GetTypes,
} from './cloudbuildv2_ConnectionGithubConfigAuthorizerCredential';

export interface cloudbuildv2_ConnectionGithubConfig {
  // GitHub App installation id.
  appInstallationId?: number;

  /*
OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.
Structure is documented below.
*/
  authorizerCredential?: cloudbuildv2_ConnectionGithubConfigAuthorizerCredential;
}

export function cloudbuildv2_ConnectionGithubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'appInstallationId',
      'GitHub App installation id.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'authorizerCredential',
      'OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.\nStructure is documented below.',
      () => cloudbuildv2_ConnectionGithubConfigAuthorizerCredential_GetTypes(),
      false,
      false,
    ),
  ];
}
