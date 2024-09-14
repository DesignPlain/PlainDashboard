import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_getTriggerSourceToBuild {
  /*
The full resource name of the bitbucket server config.
Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
*/
  bitbucketServerConfig?: string;

  /*
The full resource name of the github enterprise config.
Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.
*/
  githubEnterpriseConfig?: string;

  // The branch or tag to use. Must start with "refs/" (required).
  ref?: string;

  /*
The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]
*/
  repoType?: string;

  /*
The qualified resource name of the Repo API repository.
Either uri or repository can be specified and is required.
*/
  repository?: string;

  // The URI of the repo.
  uri?: string;
}

export function cloudbuild_getTriggerSourceToBuild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repoType",
      'The type of the repo, since it may not be explicit from the repo field (e.g from a URL).\nValues can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The qualified resource name of the Repo API repository.\nEither uri or repository can be specified and is required.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The URI of the repo.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitbucketServerConfig",
      "The full resource name of the bitbucket server config.\nFormat: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "githubEnterpriseConfig",
      "The full resource name of the github enterprise config.\nFormat: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ref",
      'The branch or tag to use. Must start with "refs/" (required).',
      () => [],
      true,
      false,
    ),
  ];
}
