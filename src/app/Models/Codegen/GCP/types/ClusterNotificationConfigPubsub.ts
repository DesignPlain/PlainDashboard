import { ClusterNotificationConfigPubsubFilter } from "./ClusterNotificationConfigPubsubFilter";

export interface ClusterNotificationConfigPubsub {
  // Whether or not the notification config is enabled
  Enabled?: boolean;

  // Choose what type of notifications you want to receive. If no filters are applied, you'll receive all notification types. Structure is documented below.
  Filter?: ClusterNotificationConfigPubsubFilter;

  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: `projects/{project}/topics/{topic}`.
  Topic?: string;
}
