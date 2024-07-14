import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition {
  // An identifier for a user group.
  userGroup?: string;

  // An identifier for a user pool. The user pool must be in the same region as the service that you are calling.
  userPool?: string;

  // An identifier for an application client. You must create the app client ID using Amazon Cognito.
  clientId?: string;
}

export function sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userGroup",
      "An identifier for a user group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPool",
      "An identifier for a user pool. The user pool must be in the same region as the service that you are calling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "An identifier for an application client. You must create the app client ID using Amazon Cognito.",
      [],
      true,
      false,
    ),
  ];
}
