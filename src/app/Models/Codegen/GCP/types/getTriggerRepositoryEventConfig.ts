import { getTriggerRepositoryEventConfigPullRequest } from "./getTriggerRepositoryEventConfigPullRequest";
import { getTriggerRepositoryEventConfigPush } from "./getTriggerRepositoryEventConfigPush";

export interface getTriggerRepositoryEventConfig {
  // Contains filter properties for matching Pull Requests.
  PullRequests?: Array<getTriggerRepositoryEventConfigPullRequest>;

  // Contains filter properties for matching git pushes.
  Pushes?: Array<getTriggerRepositoryEventConfigPush>;

  // The resource name of the Repo API resource.
  Repository?: string;
}
