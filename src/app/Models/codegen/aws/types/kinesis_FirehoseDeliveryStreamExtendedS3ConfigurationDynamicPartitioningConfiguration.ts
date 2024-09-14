import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration {
  // Enables or disables dynamic partitioning. Defaults to `false`.
  enabled?: boolean;

  /*
Total amount of seconds Firehose spends on retries. Valid values between 0 and 7200. Default is 300.

> --NOTE:-- You can enable dynamic partitioning only when you create a new delivery stream. Once you enable dynamic partitioning on a delivery stream, it cannot be disabled on this delivery stream. Therefore, the provider will recreate the resource whenever dynamic partitioning is enabled or disabled.
*/
  retryDuration?: number;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables or disables dynamic partitioning. Defaults to `false`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryDuration",
      "Total amount of seconds Firehose spends on retries. Valid values between 0 and 7200. Default is 300.\n\n> **NOTE:** You can enable dynamic partitioning only when you create a new delivery stream. Once you enable dynamic partitioning on a delivery stream, it cannot be disabled on this delivery stream. Therefore, the provider will recreate the resource whenever dynamic partitioning is enabled or disabled.",
      () => [],
      false,
      false,
    ),
  ];
}
