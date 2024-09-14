import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface budgets_BudgetActionSubscriber {
  // The address that AWS sends budget notifications to, either an SNS topic or an email.
  address?: string;

  // The type of notification that AWS sends to a subscriber. Valid values are `SNS` or `EMAIL`.
  subscriptionType?: string;
}

export function budgets_BudgetActionSubscriber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The address that AWS sends budget notifications to, either an SNS topic or an email.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subscriptionType",
      "The type of notification that AWS sends to a subscriber. Valid values are `SNS` or `EMAIL`.",
      () => [],
      true,
      false,
    ),
  ];
}
