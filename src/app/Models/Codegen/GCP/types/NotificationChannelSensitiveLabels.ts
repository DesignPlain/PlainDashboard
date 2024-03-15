export interface NotificationChannelSensitiveLabels {
  /*
An authorization token for a notification channel. Channel types that support this field include: slack
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  AuthToken?: string;

  /*
An password for a notification channel. Channel types that support this field include: webhook_basicauth
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
An servicekey token for a notification channel. Channel types that support this field include: pagerduty
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ServiceKey?: string;
}
