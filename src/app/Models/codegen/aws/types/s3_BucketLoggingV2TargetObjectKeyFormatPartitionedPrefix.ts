import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix {
  // Specifies the partition date source for the partitioned prefix. Valid values: `EventTime`, `DeliveryTime`.
  partitionDateSource?: string;
}

export function s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "partitionDateSource",
      "Specifies the partition date source for the partitioned prefix. Valid values: `EventTime`, `DeliveryTime`.",
      () => [],
      true,
      false,
    ),
  ];
}
