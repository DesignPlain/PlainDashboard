import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticsearch_getDomainCognitoOption {
  // The Cognito Identity pool used by the domain.
  identityPoolId?: string;

  // The IAM Role with the AmazonESCognitoAccess policy attached.
  roleArn?: string;

  // The Cognito User pool used by the domain.
  userPoolId?: string;

  // Whether node to node encryption is enabled.
  enabled?: boolean;
}

export function elasticsearch_getDomainCognitoOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identityPoolId",
      "The Cognito Identity pool used by the domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM Role with the AmazonESCognitoAccess policy attached.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolId",
      "The Cognito User pool used by the domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node to node encryption is enabled.",
      [],
      true,
      false,
    ),
  ];
}
