import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic which will be aborted.",
      [],
      false,
      false,
    ),
  ];
}
