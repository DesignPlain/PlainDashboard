import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityhub_AutomationRuleCriteriaUpdatedAtDateRange,
  securityhub_AutomationRuleCriteriaUpdatedAtDateRange_GetTypes,
} from "./securityhub_AutomationRuleCriteriaUpdatedAtDateRange";

export interface securityhub_AutomationRuleCriteriaUpdatedAt {
  // A configuration block of the date range for the date filter. See date_range below for more details.
  dateRange?: securityhub_AutomationRuleCriteriaUpdatedAtDateRange;

  // An end date for the date filter. Required with `start` if `date_range` is not specified.
  end?: string;

  // A start date for the date filter. Required with `end` if `date_range` is not specified.
  start?: string;
}

export function securityhub_AutomationRuleCriteriaUpdatedAt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "start",
      "A start date for the date filter. Required with `end` if `date_range` is not specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dateRange",
      "A configuration block of the date range for the date filter. See date_range below for more details.",
      securityhub_AutomationRuleCriteriaUpdatedAtDateRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "end",
      "An end date for the date filter. Required with `start` if `date_range` is not specified.",
      [],
      false,
      false,
    ),
  ];
}
