import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_TopicRuleDynamodbv2PutItem,
  iot_TopicRuleDynamodbv2PutItem_GetTypes,
} from "./iot_TopicRuleDynamodbv2PutItem";

export interface iot_TopicRuleDynamodbv2 {
  // Configuration block with DynamoDB Table to which the message will be written. Nested arguments below.
  putItem?: iot_TopicRuleDynamodbv2PutItem;

  // The ARN of the IAM role that grants access to the DynamoDB table.
  roleArn?: string;
}

export function iot_TopicRuleDynamodbv2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "putItem",
      "Configuration block with DynamoDB Table to which the message will be written. Nested arguments below.",
      () => iot_TopicRuleDynamodbv2PutItem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access to the DynamoDB table.",
      () => [],
      true,
      false,
    ),
  ];
}
