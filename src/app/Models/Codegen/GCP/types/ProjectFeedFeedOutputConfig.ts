import { ProjectFeedFeedOutputConfigPubsubDestination } from "./ProjectFeedFeedOutputConfigPubsubDestination";

export interface ProjectFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  PubsubDestination?: ProjectFeedFeedOutputConfigPubsubDestination;
}
