import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigatewayv2_StageAccessLogSettings {
  // ARN of the CloudWatch Logs log group to receive access logs. Any trailing `:-` is trimmed from the ARN.
  destinationArn?: string;

  // Single line [format](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#apigateway-cloudwatch-log-formats) of the access logs of data. Refer to log settings for [HTTP](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging-variables.html) or [Websocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-logging.html).
  format?: string;
}

export function apigatewayv2_StageAccessLogSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationArn",
      "ARN of the CloudWatch Logs log group to receive access logs. Any trailing `:*` is trimmed from the ARN.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "Single line [format](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#apigateway-cloudwatch-log-formats) of the access logs of data. Refer to log settings for [HTTP](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging-variables.html) or [Websocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-logging.html).",
      () => [],
      true,
      false,
    ),
  ];
}
