import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface budgets_BudgetActionActionThreshold {
  // The type of threshold for a notification. Valid values are `PERCENTAGE` or `ABSOLUTE_VALUE`.
  actionThresholdType?: string;

  // The threshold of a notification.
  actionThresholdValue?: number;
}

export function budgets_BudgetActionActionThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "actionThresholdValue",
      "The threshold of a notification.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "actionThresholdType",
      "The type of threshold for a notification. Valid values are `PERCENTAGE` or `ABSOLUTE_VALUE`.",
      [],
      true,
      false,
    ),
  ];
}
