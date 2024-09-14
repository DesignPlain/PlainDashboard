import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort {
  // The HTTP status code used to abort the request.
  httpStatus?: number;

  // The percentage of traffic which will be aborted.
  percentage?: number;
}

export function networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpStatus",
      "The HTTP status code used to abort the request.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic which will be aborted.",
      () => [],
      false,
      false,
    ),
  ];
}
