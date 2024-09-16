import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  // When set to true it exposes the request body to the lambda function. Defaults to false. Valid values: `true`, `false`.
  includeBody?: boolean;

  // ARN of the Lambda function.
  lambdaArn?: string;

  // Specific event to trigger this function. Valid values: `viewer-request`, `origin-request`, `viewer-response`, `origin-response`.
  eventType?: string;
}

export function cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'includeBody',
      'When set to true it exposes the request body to the lambda function. Defaults to false. Valid values: `true`, `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lambdaArn',
      'ARN of the Lambda function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'eventType',
      'Specific event to trigger this function. Valid values: `viewer-request`, `origin-request`, `viewer-response`, `origin-response`.',
      () => [],
      true,
      false,
    ),
  ];
}
