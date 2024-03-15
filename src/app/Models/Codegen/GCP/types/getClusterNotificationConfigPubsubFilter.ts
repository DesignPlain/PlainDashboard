export interface getClusterNotificationConfigPubsubFilter {
  // Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT and SECURITY_BULLETIN_EVENT
  EventTypes?: Array<string>;
}
