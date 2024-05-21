import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_GrpcRouteRuleActionRetryPolicy {
  /*
Specifies the allowed number of retries.

- - -
*/
  numRetries?: number;

  /*
Specifies one or more conditions when this retry policy applies.
Each value may be one of: `connect-failure`, `refused-stream`, `cancelled`, `deadline-exceeded`, `resource-exhausted`, `unavailable`.
*/
  retryConditions?: Array<string>;
}

export function networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Specifies the allowed number of retries.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "retryConditions",
      "Specifies one or more conditions when this retry policy applies.\nEach value may be one of: `connect-failure`, `refused-stream`, `cancelled`, `deadline-exceeded`, `resource-exhausted`, `unavailable`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
