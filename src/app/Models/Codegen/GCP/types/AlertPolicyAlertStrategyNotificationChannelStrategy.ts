export interface AlertPolicyAlertStrategyNotificationChannelStrategy {
  /*
The notification channels that these settings apply to. Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
`projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]`
*/
  NotificationChannelNames?: Array<string>;

  // The frequency at which to send reminder notifications for open incidents.
  RenotifyInterval?: string;
}
