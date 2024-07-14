import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudbuild_getTriggerGithubPush,
  cloudbuild_getTriggerGithubPush_GetTypes,
} from "./cloudbuild_getTriggerGithubPush";
import {
  cloudbuild_getTriggerGithubPullRequest,
  cloudbuild_getTriggerGithubPullRequest_GetTypes,
} from "./cloudbuild_getTriggerGithubPullRequest";

export interface cloudbuild_getTriggerGithub {
  /*
The resource name of the github enterprise config that should be applied to this installation.
For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"
*/
  enterpriseConfigResourceName?: string;

  /*
Name of the repository. For example: The name for
https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
*/
  name?: string;

  /*
Owner of the repository. For example: The owner for
https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
*/
  owner?: string;

  // filter to match changes in pull requests. Specify only one of 'pull_request' or 'push'.
  pullRequests?: Array<cloudbuild_getTriggerGithubPullRequest>;

  // filter to match changes in refs, like branches or tags. Specify only one of 'pull_request' or 'push'.
  pushes?: Array<cloudbuild_getTriggerGithubPush>;
}

export function cloudbuild_getTriggerGithub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "enterpriseConfigResourceName",
      'The resource name of the github enterprise config that should be applied to this installation.\nFor example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the repository. For example: The name for\nhttps://github.com/googlecloudplatform/cloud-builders is "cloud-builders".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "owner",
      'Owner of the repository. For example: The owner for\nhttps://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pullRequests",
      "filter to match changes in pull requests. Specify only one of 'pull_request' or 'push'.",
      cloudbuild_getTriggerGithubPullRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pushes",
      "filter to match changes in refs, like branches or tags. Specify only one of 'pull_request' or 'push'.",
      cloudbuild_getTriggerGithubPush_GetTypes(),
      true,
      false,
    ),
  ];
}
