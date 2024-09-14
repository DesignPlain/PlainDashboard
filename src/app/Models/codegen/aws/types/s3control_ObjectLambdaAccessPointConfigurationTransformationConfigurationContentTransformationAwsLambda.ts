import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda {
  // The Amazon Resource Name (ARN) of the AWS Lambda function.
  functionArn?: string;

  // Additional JSON that provides supplemental data to the Lambda function used to transform objects.
  functionPayload?: string;
}

export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "functionArn",
      "The Amazon Resource Name (ARN) of the AWS Lambda function.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "functionPayload",
      "Additional JSON that provides supplemental data to the Lambda function used to transform objects.",
      () => [],
      false,
      false,
    ),
  ];
}
