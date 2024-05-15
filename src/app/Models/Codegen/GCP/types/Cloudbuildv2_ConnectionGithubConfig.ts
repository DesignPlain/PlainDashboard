import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuildv2_ConnectionGithubConfigAuthorizerCredential,
  Cloudbuildv2_ConnectionGithubConfigAuthorizerCredential_GetTypes,
} from "./Cloudbuildv2_ConnectionGithubConfigAuthorizerCredential";

export interface Cloudbuildv2_ConnectionGithubConfig {
  // GitHub App installation id.
  AppInstallationId?: number;

  /*
OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.
Structure is documented below.
*/
  AuthorizerCredential?: Cloudbuildv2_ConnectionGithubConfigAuthorizerCredential;
}

export function Cloudbuildv2_ConnectionGithubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AppInstallationId",
      "GitHub App installation id.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AuthorizerCredential",
      "OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.\nStructure is documented below.",
      Cloudbuildv2_ConnectionGithubConfigAuthorizerCredential_GetTypes(),
      false,
      false,
    ),
  ];
}
