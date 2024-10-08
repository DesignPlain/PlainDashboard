import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig {
  // Content of a public SSH key to verify an identity of a remote Git host.
  hostPublicKey?: string;

  // The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/-/secrets/-/versions/-.
  userPrivateKeySecretVersion?: string;
}

export function dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userPrivateKeySecretVersion',
      'The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/*/secrets/*/versions/*.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hostPublicKey',
      'Content of a public SSH key to verify an identity of a remote Git host.',
      () => [],
      true,
      false,
    ),
  ];
}
