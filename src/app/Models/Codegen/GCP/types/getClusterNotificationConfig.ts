import { getClusterNotificationConfigPubsub } from "./getClusterNotificationConfigPubsub";

export interface getClusterNotificationConfig {
  // Notification config for Cloud Pub/Sub
  Pubsubs?: Array<getClusterNotificationConfigPubsub>;
}
