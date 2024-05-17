import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleActionRetryPolicy {
  // Specifies the allowed number of retries.
  NumRetries?: number;

  // Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  PerTryTimeout?: string;

  // Specifies one or more conditions when this retry policy applies.
  RetryConditions?: Array<string>;
}

export function Networkservices_HttpRouteRuleActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PerTryTimeout",
      "Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RetryConditions",
      "Specifies one or more conditions when this retry policy applies.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumRetries",
      "Specifies the allowed number of retries.",
      [],
      false,
      false,
    ),
  ];
}
