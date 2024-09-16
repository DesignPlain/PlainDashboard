import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface billing_BudgetBudgetFilterCustomPeriodEndDate {
  // Year of the date. Must be from 1 to 9999.
  year?: number;

  // Day of a month. Must be from 1 to 31 and valid for the year and month.
  day?: number;

  // Month of a year. Must be from 1 to 12.
  month?: number;
}

export function billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'year',
      'Year of the date. Must be from 1 to 9999.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'day',
      'Day of a month. Must be from 1 to 31 and valid for the year and month.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'month',
      'Month of a year. Must be from 1 to 12.',
      () => [],
      true,
      false,
    ),
  ];
}
