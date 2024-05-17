import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  // Number of HTTP(S) requests for calculating the threshold.
  Count?: number;

  // Interval over which the threshold is computed.
  IntervalSec?: number;
}

export function Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "IntervalSec",
      "Interval over which the threshold is computed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "Number of HTTP(S) requests for calculating the threshold.",
      [],
      true,
      false,
    ),
  ];
}
