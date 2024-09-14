import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuildv2_ConnectionGithubConfigAuthorizerCredential {
  // A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/-/secrets/-/versions/-`.
  oauthTokenSecretVersion?: string;

  /*
(Output)
Output only. The username associated to this token.
*/
  username?: string;
}

export function cloudbuildv2_ConnectionGithubConfigAuthorizerCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauthTokenSecretVersion",
      "A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/*/secrets/*/versions/*`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "(Output)\nOutput only. The username associated to this token.",
      () => [],
      false,
      false,
    ),
  ];
}
