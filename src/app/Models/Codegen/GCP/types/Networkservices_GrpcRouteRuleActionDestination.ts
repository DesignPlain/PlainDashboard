import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleActionDestination {
  // The URL of a BackendService to route traffic to.
  ServiceName?: string;

  // Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.
  Weight?: number;
}

export function Networkservices_GrpcRouteRuleActionDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceName",
      "The URL of a BackendService to route traffic to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Weight",
      "Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.",
      [],
      false,
      false,
    ),
  ];
}
