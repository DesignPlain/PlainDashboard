import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig {
  // Content of a public SSH key to verify an identity of a remote Git host.
  HostPublicKey?: string;

  // The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/-/secrets/-/versions/-.
  UserPrivateKeySecretVersion?: string;
}

export function Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HostPublicKey",
      "Content of a public SSH key to verify an identity of a remote Git host.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UserPrivateKeySecretVersion",
      "The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/*/secrets/*/versions/*.",
      [],
      true,
      false,
    ),
  ];
}
