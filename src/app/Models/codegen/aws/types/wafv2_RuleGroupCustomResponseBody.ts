import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_RuleGroupCustomResponseBody {
  // A unique key identifying the custom response body. This is referenced by the `custom_response_body_key` argument in the Custom Response block.
  key?: string;

  // The payload of the custom response.
  content?: string;

  // The type of content in the payload that you are defining in the `content` argument. Valid values are `TEXT_PLAIN`, `TEXT_HTML`, or `APPLICATION_JSON`.
  contentType?: string;
}

export function wafv2_RuleGroupCustomResponseBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'content',
      'The payload of the custom response.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contentType',
      'The type of content in the payload that you are defining in the `content` argument. Valid values are `TEXT_PLAIN`, `TEXT_HTML`, or `APPLICATION_JSON`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'A unique key identifying the custom response body. This is referenced by the `custom_response_body_key` argument in the Custom Response block.',
      () => [],
      true,
      false,
    ),
  ];
}
