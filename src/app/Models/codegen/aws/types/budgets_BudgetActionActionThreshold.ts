import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface budgets_BudgetActionActionThreshold {
  // The type of threshold for a notification. Valid values are `PERCENTAGE` or `ABSOLUTE_VALUE`.
  actionThresholdType?: string;

  // The threshold of a notification.
  actionThresholdValue?: number;
}

export function budgets_BudgetActionActionThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'actionThresholdType',
      'The type of threshold for a notification. Valid values are `PERCENTAGE` or `ABSOLUTE_VALUE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'actionThresholdValue',
      'The threshold of a notification.',
      () => [],
      true,
      false,
    ),
  ];
}
