import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesis_AnalyticsApplicationOutputLambda {
  // The ARN of the Lambda function.
  resourceArn?: string;

  // The ARN of the IAM Role used to access the Lambda function.
  roleArn?: string;
}

export function kinesis_AnalyticsApplicationOutputLambda_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The ARN of the Lambda function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM Role used to access the Lambda function.",
      [],
      true,
      false,
    ),
  ];
}
