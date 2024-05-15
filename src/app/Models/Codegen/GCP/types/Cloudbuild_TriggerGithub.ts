import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerGithubPush,
  Cloudbuild_TriggerGithubPush_GetTypes,
} from "./Cloudbuild_TriggerGithubPush";
import {
  Cloudbuild_TriggerGithubPullRequest,
  Cloudbuild_TriggerGithubPullRequest_GetTypes,
} from "./Cloudbuild_TriggerGithubPullRequest";

export interface Cloudbuild_TriggerGithub {
  /*
The resource name of the github enterprise config that should be applied to this installation.
For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"
*/
  EnterpriseConfigResourceName?: string;

  /*
Name of the repository. For example: The name for
https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
*/
  Name?: string;

  /*
Owner of the repository. For example: The owner for
https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
*/
  Owner?: string;

  /*
filter to match changes in pull requests. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  PullRequest?: Cloudbuild_TriggerGithubPullRequest;

  /*
filter to match changes in refs, like branches or tags. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  Push?: Cloudbuild_TriggerGithubPush;
}

export function Cloudbuild_TriggerGithub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EnterpriseConfigResourceName",
      'The resource name of the github enterprise config that should be applied to this installation.\nFor example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      'Name of the repository. For example: The name for\nhttps://github.com/googlecloudplatform/cloud-builders is "cloud-builders".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Owner",
      'Owner of the repository. For example: The owner for\nhttps://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PullRequest",
      "filter to match changes in pull requests. Specify only one of `pull_request` or `push`.\nStructure is documented below.",
      Cloudbuild_TriggerGithubPullRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Push",
      "filter to match changes in refs, like branches or tags. Specify only one of `pull_request` or `push`.\nStructure is documented below.",
      Cloudbuild_TriggerGithubPush_GetTypes(),
      false,
      false,
    ),
  ];
}
