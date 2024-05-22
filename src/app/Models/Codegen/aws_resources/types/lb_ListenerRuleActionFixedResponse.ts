import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_ListenerRuleActionFixedResponse {
  // The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.
  contentType?: string;

  // The message body.
  messageBody?: string;

  // The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
  statusCode?: string;
}

export function lb_ListenerRuleActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "statusCode",
      "The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentType",
      "The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageBody",
      "The message body.",
      [],
      false,
      false,
    ),
  ];
}
