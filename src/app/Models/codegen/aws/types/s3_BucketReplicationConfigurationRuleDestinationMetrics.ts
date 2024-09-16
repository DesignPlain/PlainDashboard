import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketReplicationConfigurationRuleDestinationMetrics {
  // Threshold within which objects are to be replicated. The only valid value is `15`.
  minutes?: number;

  // Status of replication metrics. Either `Enabled` or `Disabled`.
  status?: string;
}

export function s3_BucketReplicationConfigurationRuleDestinationMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'minutes',
      'Threshold within which objects are to be replicated. The only valid value is `15`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'Status of replication metrics. Either `Enabled` or `Disabled`.',
      () => [],
      false,
      false,
    ),
  ];
}
