import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_TopicRuleErrorActionDynamodbv2PutItem,
  iot_TopicRuleErrorActionDynamodbv2PutItem_GetTypes,
} from "./iot_TopicRuleErrorActionDynamodbv2PutItem";

export interface iot_TopicRuleErrorActionDynamodbv2 {
  // Configuration block with DynamoDB Table to which the message will be written. Nested arguments below.
  putItem?: iot_TopicRuleErrorActionDynamodbv2PutItem;

  // The IAM role ARN that allows access to the CloudWatch alarm.
  roleArn?: string;
}

export function iot_TopicRuleErrorActionDynamodbv2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "putItem",
      "Configuration block with DynamoDB Table to which the message will be written. Nested arguments below.",
      iot_TopicRuleErrorActionDynamodbv2PutItem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM role ARN that allows access to the CloudWatch alarm.",
      [],
      true,
      false,
    ),
  ];
}
