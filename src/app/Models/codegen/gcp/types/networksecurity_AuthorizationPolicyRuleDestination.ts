import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch,
  networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch_GetTypes,
} from './networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch';

export interface networksecurity_AuthorizationPolicyRuleDestination {
  // A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.
  methods?: Array<string>;

  // List of destination ports to match. At least one port should match.
  ports?: Array<number>;

  // List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.-") or a suffix match (example "-.myorg.com") or a presence (any) match "-".
  hosts?: Array<string>;

  /*
Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match.
Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.
Structure is documented below.
*/
  httpHeaderMatch?: networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch;
}

export function networksecurity_AuthorizationPolicyRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'methods',
      'A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ports',
      'List of destination ports to match. At least one port should match.',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hosts',
      'List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpHeaderMatch',
      'Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match.\nAvoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.\nStructure is documented below.',
      () =>
        networksecurity_AuthorizationPolicyRuleDestinationHttpHeaderMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
