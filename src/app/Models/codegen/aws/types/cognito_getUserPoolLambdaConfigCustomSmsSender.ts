import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_getUserPoolLambdaConfigCustomSmsSender {
  // - ARN of the Lambda function.
  lambdaArn?: string;

  // - Version of the Lambda function.
  lambdaVersion?: string;
}

export function cognito_getUserPoolLambdaConfigCustomSmsSender_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lambdaArn",
      "- ARN of the Lambda function.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaVersion",
      "- Version of the Lambda function.",
      () => [],
      true,
      false,
    ),
  ];
}
