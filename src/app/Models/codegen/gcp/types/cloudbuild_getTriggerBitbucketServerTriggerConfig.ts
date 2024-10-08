import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest,
  cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest_GetTypes,
} from './cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest';
import {
  cloudbuild_getTriggerBitbucketServerTriggerConfigPush,
  cloudbuild_getTriggerBitbucketServerTriggerConfigPush_GetTypes,
} from './cloudbuild_getTriggerBitbucketServerTriggerConfigPush';

export interface cloudbuild_getTriggerBitbucketServerTriggerConfig {
  // The Bitbucket server config resource that this trigger config maps to.
  bitbucketServerConfigResource?: string;

  // Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".
  projectKey?: string;

  // Filter to match changes in pull requests.
  pullRequests?: Array<cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest>;

  // Filter to match changes in refs like branches, tags.
  pushes?: Array<cloudbuild_getTriggerBitbucketServerTriggerConfigPush>;

  /*
Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.
*/
  repoSlug?: string;
}

export function cloudbuild_getTriggerBitbucketServerTriggerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bitbucketServerConfigResource',
      'The Bitbucket server config resource that this trigger config maps to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'projectKey',
      'Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pullRequests',
      'Filter to match changes in pull requests.',
      () =>
        cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pushes',
      'Filter to match changes in refs like branches, tags.',
      () => cloudbuild_getTriggerBitbucketServerTriggerConfigPush_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repoSlug',
      "Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.\nFor example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.",
      () => [],
      true,
      false,
    ),
  ];
}
