import { TriggerRepositoryEventConfigPullRequest } from "./TriggerRepositoryEventConfigPullRequest";
import { TriggerRepositoryEventConfigPush } from "./TriggerRepositoryEventConfigPush";

export interface TriggerRepositoryEventConfig {
  /*
Contains filter properties for matching Pull Requests.
Structure is documented below.
*/
  PullRequest?: TriggerRepositoryEventConfigPullRequest;

  /*
Contains filter properties for matching git pushes.
Structure is documented below.
*/
  Push?: TriggerRepositoryEventConfigPush;

  // The resource name of the Repo API resource.
  Repository?: string;
}
