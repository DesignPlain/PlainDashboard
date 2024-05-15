import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerSourceToBuild {
  /*
The full resource name of the bitbucket server config.
Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
*/
  BitbucketServerConfig?: string;

  /*
The full resource name of the github enterprise config.
Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.
*/
  GithubEnterpriseConfig?: string;

  // The branch or tag to use. Must start with "refs/" (required).
  Ref?: string;

  /*
The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER
Possible values are: `UNKNOWN`, `CLOUD_SOURCE_REPOSITORIES`, `GITHUB`, `BITBUCKET_SERVER`.
*/
  RepoType?: string;

  /*
The qualified resource name of the Repo API repository.
Either uri or repository can be specified and is required.
*/
  Repository?: string;

  // The URI of the repo.
  Uri?: string;
}

export function Cloudbuild_TriggerSourceToBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Ref",
      'The branch or tag to use. Must start with "refs/" (required).',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepoType",
      "The type of the repo, since it may not be explicit from the repo field (e.g from a URL).\nValues can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER\nPossible values are: `UNKNOWN`, `CLOUD_SOURCE_REPOSITORIES`, `GITHUB`, `BITBUCKET_SERVER`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repository",
      "The qualified resource name of the Repo API repository.\nEither uri or repository can be specified and is required.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The URI of the repo.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BitbucketServerConfig",
      "The full resource name of the bitbucket server config.\nFormat: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GithubEnterpriseConfig",
      "The full resource name of the github enterprise config.\nFormat: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.",
      [],
      false,
      false,
    ),
  ];
}
