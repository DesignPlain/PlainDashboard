import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  // A date range unit for the date filter. Valid values: `DAYS`.
  unit?: string;

  // A date range value for the date filter, provided as an Integer.
  value?: number;
}

export function securityhub_InsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'value',
      'A date range value for the date filter, provided as an Integer.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'unit',
      'A date range unit for the date filter. Valid values: `DAYS`.',
      () => [],
      true,
      false,
    ),
  ];
}
