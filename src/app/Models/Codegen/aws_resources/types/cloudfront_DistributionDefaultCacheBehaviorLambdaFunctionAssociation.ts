import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  // Specific event to trigger this function. Valid values: `viewer-request`, `origin-request`, `viewer-response`, `origin-response`.
  eventType?: string;

  // When set to true it exposes the request body to the lambda function. Defaults to false. Valid values: `true`, `false`.
  includeBody?: boolean;

  // ARN of the Lambda function.
  lambdaArn?: string;
}

export function cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventType",
      "Specific event to trigger this function. Valid values: `viewer-request`, `origin-request`, `viewer-response`, `origin-response`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeBody",
      "When set to true it exposes the request body to the lambda function. Defaults to false. Valid values: `true`, `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaArn",
      "ARN of the Lambda function.",
      [],
      true,
      false,
    ),
  ];
}
