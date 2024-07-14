import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface budgets_BudgetNotification {
  // (Required) What kind of budget value to notify on. Can be `ACTUAL` or `FORECASTED`
  notificationType?: string;

  // (Optional) E-Mail addresses to notify. Either this or `subscriber_sns_topic_arns` is required.
  subscriberEmailAddresses?: Array<string>;

  // (Optional) SNS topics to notify. Either this or `subscriber_email_addresses` is required.
  subscriberSnsTopicArns?: Array<string>;

  // (Required) Threshold when the notification should be sent.
  threshold?: number;

  // (Required) What kind of threshold is defined. Can be `PERCENTAGE` OR `ABSOLUTE_VALUE`.
  thresholdType?: string;

  // (Required) Comparison operator to use to evaluate the condition. Can be `LESS_THAN`, `EQUAL_TO` or `GREATER_THAN`.
  comparisonOperator?: string;
}

export function budgets_BudgetNotification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subscriberEmailAddresses",
      "(Optional) E-Mail addresses to notify. Either this or `subscriber_sns_topic_arns` is required.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subscriberSnsTopicArns",
      "(Optional) SNS topics to notify. Either this or `subscriber_email_addresses` is required.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threshold",
      "(Required) Threshold when the notification should be sent.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "thresholdType",
      "(Required) What kind of threshold is defined. Can be `PERCENTAGE` OR `ABSOLUTE_VALUE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comparisonOperator",
      "(Required) Comparison operator to use to evaluate the condition. Can be `LESS_THAN`, `EQUAL_TO` or `GREATER_THAN`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "notificationType",
      "(Required) What kind of budget value to notify on. Can be `ACTUAL` or `FORECASTED`",
      [],
      true,
      false,
    ),
  ];
}
