import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface billing_BudgetAllUpdatesRule {
  /*
The schema version of the notification. Only "1.0" is
accepted. It represents the JSON schema as defined in
https://cloud.google.com/billing/docs/how-to/budgets#notification_format.
*/
  schemaVersion?: string;

  /*
Boolean. When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.
*/
  disableDefaultIamRecipients?: boolean;

  /*
The full resource name of a monitoring notification
channel in the form
projects/{project_id}/notificationChannels/{channel_id}.
A maximum of 5 channels are allowed.
*/
  monitoringNotificationChannels?: Array<string>;

  /*
The name of the Cloud Pub/Sub topic where budget related
messages will be published, in the form
projects/{project_id}/topics/{topic_id}. Updates are sent
at regular intervals to the topic.
*/
  pubsubTopic?: string;
}

export function billing_BudgetAllUpdatesRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schemaVersion",
      'The schema version of the notification. Only "1.0" is\naccepted. It represents the JSON schema as defined in\nhttps://cloud.google.com/billing/docs/how-to/budgets#notification_format.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableDefaultIamRecipients",
      "Boolean. When set to true, disables default notifications sent\nwhen a threshold is exceeded. Default recipients are\nthose with Billing Account Administrators and Billing\nAccount Users IAM roles for the target account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "monitoringNotificationChannels",
      "The full resource name of a monitoring notification\nchannel in the form\nprojects/{project_id}/notificationChannels/{channel_id}.\nA maximum of 5 channels are allowed.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pubsubTopic",
      "The name of the Cloud Pub/Sub topic where budget related\nmessages will be published, in the form\nprojects/{project_id}/topics/{topic_id}. Updates are sent\nat regular intervals to the topic.",
      () => [],
      false,
      false,
    ),
  ];
}
