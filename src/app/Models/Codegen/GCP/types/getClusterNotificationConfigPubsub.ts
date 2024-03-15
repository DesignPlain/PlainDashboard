import { getClusterNotificationConfigPubsubFilter } from "./getClusterNotificationConfigPubsubFilter";

export interface getClusterNotificationConfigPubsub {
  // Whether or not the notification config is enabled
  Enabled?: boolean;

  // Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
  Filters?: Array<getClusterNotificationConfigPubsubFilter>;

  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  Topic?: string;
}
