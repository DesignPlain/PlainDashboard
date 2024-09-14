import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuild_TriggerGithubPullRequest,
  cloudbuild_TriggerGithubPullRequest_GetTypes,
} from "./cloudbuild_TriggerGithubPullRequest";
import {
  cloudbuild_TriggerGithubPush,
  cloudbuild_TriggerGithubPush_GetTypes,
} from "./cloudbuild_TriggerGithubPush";

export interface cloudbuild_TriggerGithub {
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

  /*
filter to match changes in pull requests. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  pullRequest?: cloudbuild_TriggerGithubPullRequest;

  /*
filter to match changes in refs, like branches or tags. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  push?: cloudbuild_TriggerGithubPush;

  /*
The resource name of the github enterprise config that should be applied to this installation.
For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"
*/
  enterpriseConfigResourceName?: string;
}

export function cloudbuild_TriggerGithub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "owner",
      'Owner of the repository. For example: The owner for\nhttps://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pullRequest",
      "filter to match changes in pull requests. Specify only one of `pull_request` or `push`.\nStructure is documented below.",
      () => cloudbuild_TriggerGithubPullRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "push",
      "filter to match changes in refs, like branches or tags. Specify only one of `pull_request` or `push`.\nStructure is documented below.",
      () => cloudbuild_TriggerGithubPush_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enterpriseConfigResourceName",
      'The resource name of the github enterprise config that should be applied to this installation.\nFor example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the repository. For example: The name for\nhttps://github.com/googlecloudplatform/cloud-builders is "cloud-builders".',
      () => [],
      false,
      false,
    ),
  ];
}
