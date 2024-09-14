import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_getDomainCognitoOption {
  // Cognito Identity pool used by the domain.
  identityPoolId?: string;

  // IAM Role with the AmazonOpenSearchServiceCognitoAccess policy attached.
  roleArn?: string;

  // Cognito User pool used by the domain.
  userPoolId?: string;

  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;
}

export function opensearch_getDomainCognitoOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identityPoolId",
      "Cognito Identity pool used by the domain.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "IAM Role with the AmazonOpenSearchServiceCognitoAccess policy attached.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolId",
      "Cognito User pool used by the domain.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      () => [],
      true,
      false,
    ),
  ];
}
