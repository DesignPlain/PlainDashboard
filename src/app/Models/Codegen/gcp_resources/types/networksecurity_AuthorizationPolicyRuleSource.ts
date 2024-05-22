import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networksecurity_AuthorizationPolicyRuleSource {
  /*
List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/-") or a suffix match (example, "-/service-account") or a presence match "-".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.
*/
  principals?: Array<string>;

  /*
List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.
*/
  ipBlocks?: Array<string>;
}

export function networksecurity_AuthorizationPolicyRuleSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "principals",
      'List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "*/service-account") or a presence match "*".\nAuthorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipBlocks",
      'List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.\nThe IP addresses of any load balancers or proxies should be considered untrusted.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
