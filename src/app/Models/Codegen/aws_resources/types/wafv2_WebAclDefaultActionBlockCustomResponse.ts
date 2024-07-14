import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader,
  wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader_GetTypes,
} from "./wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader";

export interface wafv2_WebAclDefaultActionBlockCustomResponse {
  // References the response body that you want AWS WAF to return to the web request client. This must reference a `key` defined in a `custom_response_body` block of this resource.
  customResponseBodyKey?: string;

  // The HTTP status code to return to the client.
  responseCode?: number;

  // The `response_header` blocks used to define the HTTP response headers added to the response. See `response_header` below for details.
  responseHeaders?: Array<wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader>;
}

export function wafv2_WebAclDefaultActionBlockCustomResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "responseCode",
      "The HTTP status code to return to the client.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeaders",
      "The `response_header` blocks used to define the HTTP response headers added to the response. See `response_header` below for details.",
      wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customResponseBodyKey",
      "References the response body that you want AWS WAF to return to the web request client. This must reference a `key` defined in a `custom_response_body` block of this resource.",
      [],
      false,
      false,
    ),
  ];
}
