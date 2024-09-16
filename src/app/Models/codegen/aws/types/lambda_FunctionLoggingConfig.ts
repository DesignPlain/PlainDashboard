import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_FunctionLoggingConfig {
  // for JSON structured logs, choose the detail level of the logs your application sends to CloudWatch when using supported logging libraries.
  applicationLogLevel?: string;

  // select between `Text` and structured `JSON` format for your function's logs.
  logFormat?: string;

  // the CloudWatch log group your function sends logs to.
  logGroup?: string;

  // for JSON structured logs, choose the detail level of the Lambda platform event logs sent to CloudWatch, such as `ERROR`, `DEBUG`, or `INFO`.
  systemLogLevel?: string;
}

export function lambda_FunctionLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'systemLogLevel',
      'for JSON structured logs, choose the detail level of the Lambda platform event logs sent to CloudWatch, such as `ERROR`, `DEBUG`, or `INFO`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'applicationLogLevel',
      'for JSON structured logs, choose the detail level of the logs your application sends to CloudWatch when using supported logging libraries.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logFormat',
      "select between `Text` and structured `JSON` format for your function's logs.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logGroup',
      'the CloudWatch log group your function sends logs to.',
      () => [],
      false,
      false,
    ),
  ];
}
