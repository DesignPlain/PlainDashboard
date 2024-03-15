import { ClusterNotificationConfigPubsub } from "./ClusterNotificationConfigPubsub";

export interface ClusterNotificationConfig {
  // The pubsub config for the cluster's upgrade notifications.
  Pubsub?: ClusterNotificationConfigPubsub;
}
