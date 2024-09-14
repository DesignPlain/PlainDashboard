import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_UserPoolLambdaConfigCustomEmailSender,
  cognito_UserPoolLambdaConfigCustomEmailSender_GetTypes,
} from "./cognito_UserPoolLambdaConfigCustomEmailSender";
import {
  cognito_UserPoolLambdaConfigPreTokenGenerationConfig,
  cognito_UserPoolLambdaConfigPreTokenGenerationConfig_GetTypes,
} from "./cognito_UserPoolLambdaConfigPreTokenGenerationConfig";
import {
  cognito_UserPoolLambdaConfigCustomSmsSender,
  cognito_UserPoolLambdaConfigCustomSmsSender_GetTypes,
} from "./cognito_UserPoolLambdaConfigCustomSmsSender";

export interface cognito_UserPoolLambdaConfig {
  // Post-confirmation AWS Lambda trigger.
  postConfirmation?: string;

  // A custom email sender AWS Lambda trigger. See custom_email_sender Below.
  customEmailSender?: cognito_UserPoolLambdaConfigCustomEmailSender;

  // Custom Message AWS Lambda trigger.
  customMessage?: string;

  // Defines the authentication challenge.
  defineAuthChallenge?: string;

  // The Amazon Resource Name of Key Management Service Customer master keys. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to CustomEmailSender and CustomSMSSender.
  kmsKeyId?: string;

  // Allow to customize access tokens. See pre_token_configuration_type
  preTokenGenerationConfig?: cognito_UserPoolLambdaConfigPreTokenGenerationConfig;

  // Verifies the authentication challenge response.
  verifyAuthChallengeResponse?: string;

  // ARN of the lambda creating an authentication challenge.
  createAuthChallenge?: string;

  // User migration Lambda config type.
  userMigration?: string;

  // Pre-registration AWS Lambda trigger.
  preSignUp?: string;

  // Post-authentication AWS Lambda trigger.
  postAuthentication?: string;

  // Pre-authentication AWS Lambda trigger.
  preAuthentication?: string;

  // Allow to customize identity token claims before token generation. Set this parameter for legacy purposes; for new instances of pre token generation triggers, set the lambda_arn of `pre_token_generation_config`.
  preTokenGeneration?: string;

  // A custom SMS sender AWS Lambda trigger. See custom_sms_sender Below.
  customSmsSender?: cognito_UserPoolLambdaConfigCustomSmsSender;
}

export function cognito_UserPoolLambdaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customSmsSender",
      "A custom SMS sender AWS Lambda trigger. See custom_sms_sender Below.",
      () => cognito_UserPoolLambdaConfigCustomSmsSender_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customMessage",
      "Custom Message AWS Lambda trigger.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "verifyAuthChallengeResponse",
      "Verifies the authentication challenge response.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createAuthChallenge",
      "ARN of the lambda creating an authentication challenge.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "preTokenGenerationConfig",
      "Allow to customize access tokens. See pre_token_configuration_type",
      () => cognito_UserPoolLambdaConfigPreTokenGenerationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preTokenGeneration",
      "Allow to customize identity token claims before token generation. Set this parameter for legacy purposes; for new instances of pre token generation triggers, set the lambda_arn of `pre_token_generation_config`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userMigration",
      "User migration Lambda config type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preSignUp",
      "Pre-registration AWS Lambda trigger.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postAuthentication",
      "Post-authentication AWS Lambda trigger.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customEmailSender",
      "A custom email sender AWS Lambda trigger. See custom_email_sender Below.",
      () => cognito_UserPoolLambdaConfigCustomEmailSender_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defineAuthChallenge",
      "Defines the authentication challenge.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The Amazon Resource Name of Key Management Service Customer master keys. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to CustomEmailSender and CustomSMSSender.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postConfirmation",
      "Post-confirmation AWS Lambda trigger.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preAuthentication",
      "Pre-authentication AWS Lambda trigger.",
      () => [],
      false,
      false,
    ),
  ];
}
