import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_DomainCognitoOptions {
  // ID of the Cognito User Pool to use.
  userPoolId?: string;

  // Whether Amazon Cognito authentication with Dashboard is enabled or not. Default is `false`.
  enabled?: boolean;

  // ID of the Cognito Identity Pool to use.
  identityPoolId?: string;

  // ARN of the IAM role that has the AmazonOpenSearchServiceCognitoAccess policy attached.
  roleArn?: string;
}

export function opensearch_DomainCognitoOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userPoolId",
      "ID of the Cognito User Pool to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Amazon Cognito authentication with Dashboard is enabled or not. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityPoolId",
      "ID of the Cognito Identity Pool to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the IAM role that has the AmazonOpenSearchServiceCognitoAccess policy attached.",
      [],
      true,
      false,
    ),
  ];
}
