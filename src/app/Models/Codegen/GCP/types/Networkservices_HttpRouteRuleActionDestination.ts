import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_HttpRouteRuleActionDestination {
  // The URL of a BackendService to route traffic to.
  serviceName?: string;

  /*
Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100%!!(MISSING)o(MISSING)f the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
*/
  weight?: number;
}

export function networkservices_HttpRouteRuleActionDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The URL of a BackendService to route traffic to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.\nIf only one serviceName is specified and it has a weight greater than 0, 100%!o(MISSING)f the traffic is forwarded to that backend.\nIf weights are specified for any one service name, they need to be specified for all of them.\nIf weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.",
      [],
      false,
      false,
    ),
  ];
}
