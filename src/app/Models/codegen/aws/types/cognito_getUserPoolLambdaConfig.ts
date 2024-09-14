import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_getUserPoolLambdaConfigPreTokenGenerationConfig,
  cognito_getUserPoolLambdaConfigPreTokenGenerationConfig_GetTypes,
} from "./cognito_getUserPoolLambdaConfigPreTokenGenerationConfig";
import {
  cognito_getUserPoolLambdaConfigCustomSmsSender,
  cognito_getUserPoolLambdaConfigCustomSmsSender_GetTypes,
} from "./cognito_getUserPoolLambdaConfigCustomSmsSender";
import {
  cognito_getUserPoolLambdaConfigCustomEmailSender,
  cognito_getUserPoolLambdaConfigCustomEmailSender_GetTypes,
} from "./cognito_getUserPoolLambdaConfigCustomEmailSender";

export interface cognito_getUserPoolLambdaConfig {
  //
  postAuthentication?: string;

  //
  preTokenGeneration?: string;

  //
  verifyAuthChallengeResponse?: string;

  //
  createAuthChallenge?: string;

  //
  customMessage?: string;

  //
  kmsKeyId?: string;

  //
  preTokenGenerationConfigs?: Array<cognito_getUserPoolLambdaConfigPreTokenGenerationConfig>;

  //
  customSmsSenders?: Array<cognito_getUserPoolLambdaConfigCustomSmsSender>;

  //
  postConfirmation?: string;

  //
  preSignUp?: string;

  //
  userMigration?: string;

  //
  customEmailSenders?: Array<cognito_getUserPoolLambdaConfigCustomEmailSender>;

  //
  defineAuthChallenge?: string;

  //
  preAuthentication?: string;
}

export function cognito_getUserPoolLambdaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defineAuthChallenge",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "kmsKeyId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "preSignUp",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userMigration",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createAuthChallenge",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customMessage",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preAuthentication",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postAuthentication",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "verifyAuthChallengeResponse",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "preTokenGenerationConfigs",
      "",
      () => cognito_getUserPoolLambdaConfigPreTokenGenerationConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customEmailSenders",
      "",
      () => cognito_getUserPoolLambdaConfigCustomEmailSender_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preTokenGeneration",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customSmsSenders",
      "",
      () => cognito_getUserPoolLambdaConfigCustomSmsSender_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postConfirmation",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
