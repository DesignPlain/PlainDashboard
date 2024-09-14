import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmincidents_getResponsePlanIntegrationPagerduty,
  ssmincidents_getResponsePlanIntegrationPagerduty_GetTypes,
} from "./ssmincidents_getResponsePlanIntegrationPagerduty";

export interface ssmincidents_getResponsePlanIntegration {
  // Details about the PagerDuty configuration for a response plan. The following values are supported:
  pagerduties?: Array<ssmincidents_getResponsePlanIntegrationPagerduty>;
}

export function ssmincidents_getResponsePlanIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pagerduties",
      "Details about the PagerDuty configuration for a response plan. The following values are supported:",
      () => ssmincidents_getResponsePlanIntegrationPagerduty_GetTypes(),
      true,
      false,
    ),
  ];
}
