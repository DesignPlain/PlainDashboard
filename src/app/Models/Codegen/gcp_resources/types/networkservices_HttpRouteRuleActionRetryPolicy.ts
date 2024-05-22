import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_HttpRouteRuleActionRetryPolicy {
  // Specifies the allowed number of retries.
  numRetries?: number;

  // Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  perTryTimeout?: string;

  // Specifies one or more conditions when this retry policy applies.
  retryConditions?: Array<string>;
}

export function networkservices_HttpRouteRuleActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "retryConditions",
      "Specifies one or more conditions when this retry policy applies.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Specifies the allowed number of retries.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "perTryTimeout",
      "Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
