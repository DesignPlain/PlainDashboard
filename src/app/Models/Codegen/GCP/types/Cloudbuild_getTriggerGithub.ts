import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerGithubPullRequest,
  Cloudbuild_getTriggerGithubPullRequest_GetTypes,
} from "./Cloudbuild_getTriggerGithubPullRequest";
import {
  Cloudbuild_getTriggerGithubPush,
  Cloudbuild_getTriggerGithubPush_GetTypes,
} from "./Cloudbuild_getTriggerGithubPush";

export interface Cloudbuild_getTriggerGithub {
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

  // filter to match changes in pull requests. Specify only one of 'pull_request' or 'push'.
  PullRequests?: Array<Cloudbuild_getTriggerGithubPullRequest>;

  // filter to match changes in refs, like branches or tags. Specify only one of 'pull_request' or 'push'.
  Pushes?: Array<Cloudbuild_getTriggerGithubPush>;
}

export function Cloudbuild_getTriggerGithub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      'Name of the repository. For example: The name for\nhttps://github.com/googlecloudplatform/cloud-builders is "cloud-builders".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Owner",
      'Owner of the repository. For example: The owner for\nhttps://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PullRequests",
      "filter to match changes in pull requests. Specify only one of 'pull_request' or 'push'.",
      Cloudbuild_getTriggerGithubPullRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Pushes",
      "filter to match changes in refs, like branches or tags. Specify only one of 'pull_request' or 'push'.",
      Cloudbuild_getTriggerGithubPush_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnterpriseConfigResourceName",
      'The resource name of the github enterprise config that should be applied to this installation.\nFor example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"',
      [],
      true,
      false,
    ),
  ];
}
