export interface getNotificationChannelSensitiveLabel {
  // An authorization token for a notification channel. Channel types that support this field include: slack
  AuthToken?: string;

  // An password for a notification channel. Channel types that support this field include: webhook_basicauth
  Password?: string;

  // An servicekey token for a notification channel. Channel types that support this field include: pagerduty
  ServiceKey?: string;
}
