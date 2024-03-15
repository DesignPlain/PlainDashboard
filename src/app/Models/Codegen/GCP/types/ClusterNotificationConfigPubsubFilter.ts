export interface ClusterNotificationConfigPubsubFilter {
  // Can be used to filter what notifications are sent. Accepted values are `UPGRADE_AVAILABLE_EVENT`, `UPGRADE_EVENT` and `SECURITY_BULLETIN_EVENT`. See [Filtering notifications](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-notifications#filtering) for more details.
  EventTypes?: Array<string>;
}
