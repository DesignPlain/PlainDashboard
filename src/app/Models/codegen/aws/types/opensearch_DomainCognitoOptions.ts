import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opensearch_DomainCognitoOptions {
  // Whether Amazon Cognito authentication with Dashboard is enabled or not. Default is `false`.
  enabled?: boolean;

  // ID of the Cognito Identity Pool to use.
  identityPoolId?: string;

  // ARN of the IAM role that has the AmazonOpenSearchServiceCognitoAccess policy attached.
  roleArn?: string;

  // ID of the Cognito User Pool to use.
  userPoolId?: string;
}

export function opensearch_DomainCognitoOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether Amazon Cognito authentication with Dashboard is enabled or not. Default is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'identityPoolId',
      'ID of the Cognito Identity Pool to use.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'ARN of the IAM role that has the AmazonOpenSearchServiceCognitoAccess policy attached.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolId',
      'ID of the Cognito User Pool to use.',
      () => [],
      true,
      false,
    ),
  ];
}
