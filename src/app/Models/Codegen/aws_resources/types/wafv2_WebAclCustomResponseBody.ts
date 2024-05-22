import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_WebAclCustomResponseBody {
  // Payload of the custom response.
  content?: string;

  // Type of content in the payload that you are defining in the `content` argument. Valid values are `TEXT_PLAIN`, `TEXT_HTML`, or `APPLICATION_JSON`.
  contentType?: string;

  // Unique key identifying the custom response body. This is referenced by the `custom_response_body_key` argument in the `custom_response` block.
  key?: string;
}

export function wafv2_WebAclCustomResponseBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "Payload of the custom response.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentType",
      "Type of content in the payload that you are defining in the `content` argument. Valid values are `TEXT_PLAIN`, `TEXT_HTML`, or `APPLICATION_JSON`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Unique key identifying the custom response body. This is referenced by the `custom_response_body_key` argument in the `custom_response` block.",
      [],
      true,
      false,
    ),
  ];
}
