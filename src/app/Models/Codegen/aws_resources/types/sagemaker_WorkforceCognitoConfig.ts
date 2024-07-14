import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_WorkforceCognitoConfig {
  // ID for your Amazon Cognito user pool.
  userPool?: string;

  // The client ID for your Amazon Cognito user pool.
  clientId?: string;
}

export function sagemaker_WorkforceCognitoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userPool",
      "ID for your Amazon Cognito user pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The client ID for your Amazon Cognito user pool.",
      [],
      true,
      false,
    ),
  ];
}
