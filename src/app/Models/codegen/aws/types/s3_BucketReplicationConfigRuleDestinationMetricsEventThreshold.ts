import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold {
  // Time in minutes. Valid values: `15`.
  minutes?: number;
}

export function s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Time in minutes. Valid values: `15`.",
      () => [],
      true,
      false,
    ),
  ];
}
