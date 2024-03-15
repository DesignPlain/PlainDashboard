import { TriggerGithubPullRequest } from "./TriggerGithubPullRequest";
import { TriggerGithubPush } from "./TriggerGithubPush";

export interface TriggerGithub {
  /*
Owner of the repository. For example: The owner for
https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
*/
  Owner?: string;

  /*
filter to match changes in pull requests. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  PullRequest?: TriggerGithubPullRequest;

  /*
filter to match changes in refs, like branches or tags. Specify only one of `pull_request` or `push`.
Structure is documented below.
*/
  Push?: TriggerGithubPush;

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
}
