import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_WorkforceCognitoConfig {
  // The client ID for your Amazon Cognito user pool.
  clientId?: string;

  // ID for your Amazon Cognito user pool.
  userPool?: string;
}

export function sagemaker_WorkforceCognitoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'The client ID for your Amazon Cognito user pool.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPool',
      'ID for your Amazon Cognito user pool.',
      () => [],
      true,
      false,
    ),
  ];
}
