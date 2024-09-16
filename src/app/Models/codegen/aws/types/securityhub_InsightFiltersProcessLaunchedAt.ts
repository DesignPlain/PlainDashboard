import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityhub_InsightFiltersProcessLaunchedAtDateRange,
  securityhub_InsightFiltersProcessLaunchedAtDateRange_GetTypes,
} from './securityhub_InsightFiltersProcessLaunchedAtDateRange';

export interface securityhub_InsightFiltersProcessLaunchedAt {
  // A configuration block of the date range for the date filter. See date_range below for more details.
  dateRange?: securityhub_InsightFiltersProcessLaunchedAtDateRange;

  // An end date for the date filter. Required with `start` if `date_range` is not specified.
  end?: string;

  // A start date for the date filter. Required with `end` if `date_range` is not specified.
  start?: string;
}

export function securityhub_InsightFiltersProcessLaunchedAt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dateRange',
      'A configuration block of the date range for the date filter. See date_range below for more details.',
      () => securityhub_InsightFiltersProcessLaunchedAtDateRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'end',
      'An end date for the date filter. Required with `start` if `date_range` is not specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'start',
      'A start date for the date filter. Required with `end` if `date_range` is not specified.',
      () => [],
      false,
      false,
    ),
  ];
}
