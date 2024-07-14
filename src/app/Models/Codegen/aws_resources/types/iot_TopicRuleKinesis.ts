import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleKinesis {
  // The partition key.
  partitionKey?: string;

  // The ARN of the IAM role that grants access to the Amazon Kinesis stream.
  roleArn?: string;

  // The name of the Amazon Kinesis stream.
  streamName?: string;
}

export function iot_TopicRuleKinesis_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "partitionKey",
      "The partition key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access to the Amazon Kinesis stream.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamName",
      "The name of the Amazon Kinesis stream.",
      [],
      true,
      false,
    ),
  ];
}
