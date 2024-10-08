import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_UsagePlanQuotaSettings {
  // Maximum number of requests that can be made in a given time period.
  limit?: number;

  // Number of requests subtracted from the given limit in the initial time period.
  offset?: number;

  // Time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".
  period?: string;
}

export function apigateway_UsagePlanQuotaSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'limit',
      'Maximum number of requests that can be made in a given time period.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'offset',
      'Number of requests subtracted from the given limit in the initial time period.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'period',
      'Time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".',
      () => [],
      true,
      false,
    ),
  ];
}
