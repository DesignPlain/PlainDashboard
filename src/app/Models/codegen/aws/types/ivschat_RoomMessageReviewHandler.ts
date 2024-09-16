import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ivschat_RoomMessageReviewHandler {
  /*
The fallback behavior (whether the message
is allowed or denied) if the handler does not return a valid response,
encounters an error, or times out. Valid values: `ALLOW`, `DENY`.
*/
  fallbackResult?: string;

  // ARN of the lambda message review handler function.
  uri?: string;
}

export function ivschat_RoomMessageReviewHandler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fallbackResult',
      'The fallback behavior (whether the message\nis allowed or denied) if the handler does not return a valid response,\nencounters an error, or times out. Valid values: `ALLOW`, `DENY`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'uri',
      'ARN of the lambda message review handler function.',
      () => [],
      false,
      false,
    ),
  ];
}
