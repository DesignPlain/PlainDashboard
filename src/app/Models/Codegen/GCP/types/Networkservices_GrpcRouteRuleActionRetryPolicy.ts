import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleActionRetryPolicy {
  /*
Specifies one or more conditions when this retry policy applies.
Each value may be one of: `connect-failure`, `refused-stream`, `cancelled`, `deadline-exceeded`, `resource-exhausted`, `unavailable`.
*/
  RetryConditions?: Array<string>;

  /*
Specifies the allowed number of retries.

- - -
*/
  NumRetries?: number;
}

export function Networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RetryConditions",
      "Specifies one or more conditions when this retry policy applies.\nEach value may be one of: `connect-failure`, `refused-stream`, `cancelled`, `deadline-exceeded`, `resource-exhausted`, `unavailable`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumRetries",
      "Specifies the allowed number of retries.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
