import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_FlowLogDestinationOptions {
  // The format for the flow log. Default value: `plain-text`. Valid values: `plain-text`, `parquet`.
  fileFormat?: string;

  // Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. Default value: `false`.
  hiveCompatiblePartitions?: boolean;

  // Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. Default value: `false`.
  perHourPartition?: boolean;
}

export function ec2_FlowLogDestinationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileFormat",
      "The format for the flow log. Default value: `plain-text`. Valid values: `plain-text`, `parquet`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "hiveCompatiblePartitions",
      "Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. Default value: `false`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "perHourPartition",
      "Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. Default value: `false`.",
      [],
      false,
      true,
    ),
  ];
}
