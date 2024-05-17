import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential {
  /*
(Output)
Output only. The username associated to this token.
*/
  Username?: string;

  // Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/-/secrets/-/versions/-`.
  UserTokenSecretVersion?: string;
}

export function Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "(Output)\nOutput only. The username associated to this token.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UserTokenSecretVersion",
      "Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/*/secrets/*/versions/*`.",
      [],
      true,
      false,
    ),
  ];
}
