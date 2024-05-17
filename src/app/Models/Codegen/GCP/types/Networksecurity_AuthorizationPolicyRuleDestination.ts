import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch,
  Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch_GetTypes,
} from "./Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch";

export interface Networksecurity_AuthorizationPolicyRuleDestination {
  /*
Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match.
Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.
Structure is documented below.
*/
  HttpHeaderMatch?: Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch;

  // A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.
  Methods?: Array<string>;

  // List of destination ports to match. At least one port should match.
  Ports?: Array<number>;

  // List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.-") or a suffix match (example "-.myorg.com") or a presence (any) match "-".
  Hosts?: Array<string>;
}

export function Networksecurity_AuthorizationPolicyRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HttpHeaderMatch",
      "Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match.\nAvoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.\nStructure is documented below.",
      Networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Methods",
      "A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of destination ports to match. At least one port should match.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Hosts",
      'List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
