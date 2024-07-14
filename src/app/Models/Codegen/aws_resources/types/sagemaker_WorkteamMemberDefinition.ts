import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition,
  sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition_GetTypes,
} from "./sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition";
import {
  sagemaker_WorkteamMemberDefinitionOidcMemberDefinition,
  sagemaker_WorkteamMemberDefinitionOidcMemberDefinition_GetTypes,
} from "./sagemaker_WorkteamMemberDefinitionOidcMemberDefinition";

export interface sagemaker_WorkteamMemberDefinition {
  // The Amazon Cognito user group that is part of the work team. See Cognito Member Definition details below.
  cognitoMemberDefinition?: sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition;

  // A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. See Cognito Member Definition details below.
  oidcMemberDefinition?: sagemaker_WorkteamMemberDefinitionOidcMemberDefinition;
}

export function sagemaker_WorkteamMemberDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cognitoMemberDefinition",
      "The Amazon Cognito user group that is part of the work team. See Cognito Member Definition details below.",
      sagemaker_WorkteamMemberDefinitionCognitoMemberDefinition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oidcMemberDefinition",
      "A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. See Cognito Member Definition details below.",
      sagemaker_WorkteamMemberDefinitionOidcMemberDefinition_GetTypes(),
      false,
      false,
    ),
  ];
}
