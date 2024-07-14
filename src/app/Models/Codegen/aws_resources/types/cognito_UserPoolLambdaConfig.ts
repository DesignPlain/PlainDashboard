import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cognito_UserPoolLambdaConfigCustomEmailSender,
  cognito_UserPoolLambdaConfigCustomEmailSender_GetTypes,
} from "./cognito_UserPoolLambdaConfigCustomEmailSender";
import {
  cognito_UserPoolLambdaConfigCustomSmsSender,
  cognito_UserPoolLambdaConfigCustomSmsSender_GetTypes,
} from "./cognito_UserPoolLambdaConfigCustomSmsSender";

export interface cognito_UserPoolLambdaConfig {
  // Post-confirmation AWS Lambda trigger.
  postConfirmation?: string;

  // Pre-authentication AWS Lambda trigger.
  preAuthentication?: string;

  // Pre-registration AWS Lambda trigger.
  preSignUp?: string;

  // ARN of the lambda creating an authentication challenge.
  createAuthChallenge?: string;

  // A custom email sender AWS Lambda trigger. See custom_email_sender Below.
  customEmailSender?: cognito_UserPoolLambdaConfigCustomEmailSender;

  // A custom SMS sender AWS Lambda trigger. See custom_sms_sender Below.
  customSmsSender?: cognito_UserPoolLambdaConfigCustomSmsSender;

  // Post-authentication AWS Lambda trigger.
  postAuthentication?: string;

  // Allow to customize identity token claims before token generation.
  preTokenGeneration?: string;

  // User migration Lambda config type.
  userMigration?: string;

  // Verifies the authentication challenge response.
  verifyAuthChallengeResponse?: string;

  // Custom Message AWS Lambda trigger.
  customMessage?: string;

  // Defines the authentication challenge.
  defineAuthChallenge?: string;

  // The Amazon Resource Name of Key Management Service Customer master keys. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to CustomEmailSender and CustomSMSSender.
  kmsKeyId?: string;
}

export function cognito_UserPoolLambdaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "verifyAuthChallengeResponse",
      "Verifies the authentication challenge response.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customMessage",
      "Custom Message AWS Lambda trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defineAuthChallenge",
      "Defines the authentication challenge.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preAuthentication",
      "Pre-authentication AWS Lambda trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customEmailSender",
      "A custom email sender AWS Lambda trigger. See custom_email_sender Below.",
      cognito_UserPoolLambdaConfigCustomEmailSender_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customSmsSender",
      "A custom SMS sender AWS Lambda trigger. See custom_sms_sender Below.",
      cognito_UserPoolLambdaConfigCustomSmsSender_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postAuthentication",
      "Post-authentication AWS Lambda trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preTokenGeneration",
      "Allow to customize identity token claims before token generation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postConfirmation",
      "Post-confirmation AWS Lambda trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preSignUp",
      "Pre-registration AWS Lambda trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createAuthChallenge",
      "ARN of the lambda creating an authentication challenge.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userMigration",
      "User migration Lambda config type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The Amazon Resource Name of Key Management Service Customer master keys. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to CustomEmailSender and CustomSMSSender.",
      [],
      false,
      false,
    ),
  ];
}
