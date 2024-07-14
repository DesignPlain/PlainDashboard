import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securityhub_InsightFiltersResourceContainerLaunchedAtDateRange {
  // A date range unit for the date filter. Valid values: `DAYS`.
  unit?: string;

  // A date range value for the date filter, provided as an Integer.
  value?: number;
}

export function securityhub_InsightFiltersResourceContainerLaunchedAtDateRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "A date range unit for the date filter. Valid values: `DAYS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "A date range value for the date filter, provided as an Integer.",
      [],
      true,
      false,
    ),
  ];
}
