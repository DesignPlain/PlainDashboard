import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudbuild_TriggerGitFileSource {
  /*
The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the
filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.
*/
  revision?: string;

  /*
The URI of the repo (optional). If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.
*/
  uri?: string;

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

  // The path of the file, with the repo root as the root of the path.
  path?: string;

  /*
The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER
Possible values are: `UNKNOWN`, `CLOUD_SOURCE_REPOSITORIES`, `GITHUB`, `BITBUCKET_SERVER`.
*/
  repoType?: string;

  /*
The fully qualified resource name of the Repo API repository. The fully qualified resource name of the Repo API repository.
If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.
*/
  repository?: string;
}

export function cloudbuild_TriggerGitFileSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The fully qualified resource name of the Repo API repository. The fully qualified resource name of the Repo API repository.\nIf unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the\nfilename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions\nIf unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The URI of the repo (optional). If unspecified, the repo from which the trigger\ninvocation originated is assumed to be the repo from which to read the specified path.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitbucketServerConfig",
      "The full resource name of the bitbucket server config.\nFormat: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "githubEnterpriseConfig",
      "The full resource name of the github enterprise config.\nFormat: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path of the file, with the repo root as the root of the path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repoType",
      "The type of the repo, since it may not be explicit from the repo field (e.g from a URL).\nValues can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER\nPossible values are: `UNKNOWN`, `CLOUD_SOURCE_REPOSITORIES`, `GITHUB`, `BITBUCKET_SERVER`.",
      [],
      true,
      false,
    ),
  ];
}
