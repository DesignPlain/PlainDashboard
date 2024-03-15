export interface BudgetAllUpdatesRule {
  /*
Boolean. When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.
*/
  DisableDefaultIamRecipients?: boolean;

  /*
The full resource name of a monitoring notification
channel in the form
projects/{project_id}/notificationChannels/{channel_id}.
A maximum of 5 channels are allowed.
*/
  MonitoringNotificationChannels?: Array<string>;

  /*
The name of the Cloud Pub/Sub topic where budget related
messages will be published, in the form
projects/{project_id}/topics/{topic_id}. Updates are sent
at regular intervals to the topic.
*/
  PubsubTopic?: string;

  /*
The schema version of the notification. Only "1.0" is
accepted. It represents the JSON schema as defined in
https://cloud.google.com/billing/docs/how-to/budgets#notification_format.
*/
  SchemaVersion?: string;
}
