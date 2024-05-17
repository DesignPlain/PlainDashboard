import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /*
The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive.
*/
  HttpStatus?: number;

  /*
The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  Percentage?: number;
}

export function Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "HttpStatus",
      "The HTTP status code used to abort the request.\nThe value must be between 200 and 599 inclusive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percentage",
      "The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.\nThe value must be between 0.0 and 100.0 inclusive.",
      [],
      true,
      false,
    ),
  ];
}
