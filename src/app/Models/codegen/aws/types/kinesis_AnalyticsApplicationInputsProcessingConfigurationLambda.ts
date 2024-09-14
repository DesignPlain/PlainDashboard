import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda {
  // The ARN of the IAM Role used to access the Lambda function.
  roleArn?: string;

  // The ARN of the Lambda function.
  resourceArn?: string;
}

export function kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM Role used to access the Lambda function.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The ARN of the Lambda function.",
      () => [],
      true,
      false,
    ),
  ];
}
