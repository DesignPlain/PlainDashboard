import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_ListenerRuleActionFixedResponse {
  // The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.
  contentType?: string;

  // The message body.
  messageBody?: string;

  // The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
  statusCode?: string;
}

export function alb_ListenerRuleActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contentType",
      "The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageBody",
      "The message body.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusCode",
      "The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.",
      () => [],
      false,
      false,
    ),
  ];
}
