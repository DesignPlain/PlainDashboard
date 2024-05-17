import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort {
  // The HTTP status code used to abort the request.
  HttpStatus?: number;

  // The percentage of traffic which will be aborted.
  Percentage?: number;
}

export function Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "HttpStatus",
      "The HTTP status code used to abort the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percentage",
      "The percentage of traffic which will be aborted.",
      [],
      false,
      false,
    ),
  ];
}
