import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold,
  s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold";

export interface s3_BucketReplicationConfigRuleDestinationMetrics {
  // Configuration block that specifies the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event. See below.
  eventThreshold?: s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold;

  // Status of the Destination Metrics. Either `"Enabled"` or `"Disabled"`.
  status?: string;
}

export function s3_BucketReplicationConfigRuleDestinationMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "eventThreshold",
      "Configuration block that specifies the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event. See below.",
      s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      'Status of the Destination Metrics. Either `"Enabled"` or `"Disabled"`.',
      [],
      true,
      false,
    ),
  ];
}
