import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleErrorActionDynamodbv2PutItem {
  // The name of the DynamoDB table.
  tableName?: string;
}

export function iot_TopicRuleErrorActionDynamodbv2PutItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'tableName',
      'The name of the DynamoDB table.',
      () => [],
      true,
      false,
    ),
  ];
}
