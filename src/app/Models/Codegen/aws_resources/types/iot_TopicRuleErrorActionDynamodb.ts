import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleErrorActionDynamodb {
  // The hash key value.
  hashKeyValue?: string;

  // The operation. Valid values are "INSERT", "UPDATE", or "DELETE".
  operation?: string;

  // The action payload.
  payloadField?: string;

  // The range key name.
  rangeKeyField?: string;

  // The hash key name.
  hashKeyField?: string;

  // The range key type. Valid values are "STRING" or "NUMBER".
  rangeKeyType?: string;

  // The range key value.
  rangeKeyValue?: string;

  // The ARN of the IAM role that grants access to the DynamoDB table.
  roleArn?: string;

  // The name of the DynamoDB table.
  tableName?: string;

  // The hash key type. Valid values are "STRING" or "NUMBER".
  hashKeyType?: string;
}

export function iot_TopicRuleErrorActionDynamodb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the DynamoDB table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operation",
      'The operation. Valid values are "INSERT", "UPDATE", or "DELETE".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rangeKeyField",
      "The range key name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hashKeyField",
      "The hash key name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rangeKeyType",
      'The range key type. Valid values are "STRING" or "NUMBER".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access to the DynamoDB table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hashKeyValue",
      "The hash key value.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "payloadField",
      "The action payload.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rangeKeyValue",
      "The range key value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hashKeyType",
      'The hash key type. Valid values are "STRING" or "NUMBER".',
      [],
      false,
      false,
    ),
  ];
}
