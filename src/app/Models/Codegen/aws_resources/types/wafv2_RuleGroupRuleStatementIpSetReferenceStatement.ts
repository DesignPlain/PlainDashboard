import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig,
  wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes,
} from "./wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig";

export interface wafv2_RuleGroupRuleStatementIpSetReferenceStatement {
  // The Amazon Resource Name (ARN) of the IP Set that this statement references.
  arn?: string;

  // The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See IPSet Forwarded IP Config below for more details.
  ipSetForwardedIpConfig?: wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}

export function wafv2_RuleGroupRuleStatementIpSetReferenceStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the IP Set that this statement references.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetForwardedIpConfig",
      "The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See IPSet Forwarded IP Config below for more details.",
      wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
