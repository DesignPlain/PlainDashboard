import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch {
  // The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".
  HeaderName?: string;

  // The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.
  RegexMatch?: string;
}

export function Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      'The name of the HTTP header to match. For matching against the HTTP request\'s authority, use a headerMatch with the header name ":authority". For matching a request\'s method, use the headerName ":method".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.",
      [],
      true,
      false,
    ),
  ];
}
