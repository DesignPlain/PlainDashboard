import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticache_ReplicationGroupLogDeliveryConfiguration {
  // Name of either the CloudWatch Logs LogGroup or Kinesis Data Firehose resource.
  destination?: string;

  // For CloudWatch Logs use `cloudwatch-logs` or for Kinesis Data Firehose use `kinesis-firehose`.
  destinationType?: string;

  // Valid values are `json` or `text`
  logFormat?: string;

  // Valid values are  `slow-log` or `engine-log`. Max 1 of each.
  logType?: string;
}

export function elasticache_ReplicationGroupLogDeliveryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logType',
      'Valid values are  `slow-log` or `engine-log`. Max 1 of each.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destination',
      'Name of either the CloudWatch Logs LogGroup or Kinesis Data Firehose resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationType',
      'For CloudWatch Logs use `cloudwatch-logs` or for Kinesis Data Firehose use `kinesis-firehose`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logFormat',
      'Valid values are `json` or `text`',
      () => [],
      true,
      false,
    ),
  ];
}
