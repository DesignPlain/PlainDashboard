import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appconfig_ConfigurationProfileValidator {
  // Either the JSON Schema content or the ARN of an AWS Lambda function.
  content?: string;

  // Type of validator. Valid values: `JSON_SCHEMA` and `LAMBDA`.
  type?: string;
}

export function appconfig_ConfigurationProfileValidator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'content',
      'Either the JSON Schema content or the ARN of an AWS Lambda function.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of validator. Valid values: `JSON_SCHEMA` and `LAMBDA`.',
      () => [],
      true,
      false,
    ),
  ];
}
