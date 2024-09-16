import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lb_ListenerDefaultActionFixedResponse {
  /*
Content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.

The following arguments are optional:
*/
  contentType?: string;

  // Message body.
  messageBody?: string;

  // HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
  statusCode?: string;
}

export function lb_ListenerDefaultActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contentType',
      'Content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageBody',
      'Message body.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'statusCode',
      'HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.',
      () => [],
      false,
      false,
    ),
  ];
}
