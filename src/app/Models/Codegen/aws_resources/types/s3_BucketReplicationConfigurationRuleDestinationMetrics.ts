import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketReplicationConfigurationRuleDestinationMetrics {
  // The status of replication metrics. Either `Enabled` or `Disabled`.
  status?: string;

  // Threshold within which objects are to be replicated. The only valid value is `15`.
  minutes?: number;
}

export function s3_BucketReplicationConfigurationRuleDestinationMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of replication metrics. Either `Enabled` or `Disabled`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Threshold within which objects are to be replicated. The only valid value is `15`.",
      [],
      false,
      false,
    ),
  ];
}
