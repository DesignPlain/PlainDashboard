import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_TopicRuleErrorActionTimestreamTimestamp,
  iot_TopicRuleErrorActionTimestreamTimestamp_GetTypes,
} from "./iot_TopicRuleErrorActionTimestreamTimestamp";
import {
  iot_TopicRuleErrorActionTimestreamDimension,
  iot_TopicRuleErrorActionTimestreamDimension_GetTypes,
} from "./iot_TopicRuleErrorActionTimestreamDimension";

export interface iot_TopicRuleErrorActionTimestream {
  // The ARN of the role that grants permission to write to the Amazon Timestream database table.
  roleArn?: string;

  // The name of the database table into which to write the measure records.
  tableName?: string;

  // Configuration block specifying an application-defined value to replace the default value assigned to the Timestream record's timestamp in the time column. Nested arguments below.
  timestamp?: iot_TopicRuleErrorActionTimestreamTimestamp;

  // The name of an Amazon Timestream database.
  databaseName?: string;

  // Configuration blocks with metadata attributes of the time series that are written in each measure record. Nested arguments below.
  dimensions?: Array<iot_TopicRuleErrorActionTimestreamDimension>;
}

export function iot_TopicRuleErrorActionTimestream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role that grants permission to write to the Amazon Timestream database table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the database table into which to write the measure records.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timestamp",
      "Configuration block specifying an application-defined value to replace the default value assigned to the Timestream record's timestamp in the time column. Nested arguments below.",
      iot_TopicRuleErrorActionTimestreamTimestamp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of an Amazon Timestream database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration blocks with metadata attributes of the time series that are written in each measure record. Nested arguments below.",
      iot_TopicRuleErrorActionTimestreamDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
