import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_FlowLogDestinationOptions {
  // Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. Default value: `false`.
  hiveCompatiblePartitions?: boolean;

  // Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. Default value: `false`.
  perHourPartition?: boolean;

  // The format for the flow log. Default value: `plain-text`. Valid values: `plain-text`, `parquet`.
  fileFormat?: string;
}

export function ec2_FlowLogDestinationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fileFormat',
      'The format for the flow log. Default value: `plain-text`. Valid values: `plain-text`, `parquet`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'hiveCompatiblePartitions',
      'Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. Default value: `false`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'perHourPartition',
      'Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. Default value: `false`.',
      () => [],
      false,
      true,
    ),
  ];
}
