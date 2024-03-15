export interface TransferJobNotificationConfig {
  // Event types for which a notification is desired. If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".
  EventTypes?: Array<string>;

  // The desired format of the notification message payloads. One of "NONE" or "JSON".
  PayloadFormat?: string;

  // The Topic.name of the Pub/Sub topic to which to publish notifications. Must be of the format: projects/{project}/topics/{topic}. Not matching this format results in an INVALID_ARGUMENT error.
  PubsubTopic?: string;
}
