import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_DataSourceLambdaConfig {
  // ARN for the Lambda function.
  functionArn?: string;
}

export function appsync_DataSourceLambdaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'functionArn',
      'ARN for the Lambda function.',
      () => [],
      true,
      false,
    ),
  ];
}
