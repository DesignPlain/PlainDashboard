import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_GrpcRouteRuleActionDestination {
  // The URL of a BackendService to route traffic to.
  serviceName?: string;

  // Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.
  weight?: number;
}

export function networkservices_GrpcRouteRuleActionDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The URL of a BackendService to route traffic to.",
      () => [],
      false,
      false,
    ),
  ];
}
