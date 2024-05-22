import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse,
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse_GetTypes,
} from "./wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse";

export interface wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride {
  // Override action to use, in place of the configured action of the rule in the rule group. See `action` for details.
  actionToUse?: wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse;

  // Name of the rule to override. See the [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html) for a list of names in the appropriate rule group in use.
  name?: string;
}

export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "actionToUse",
      "Override action to use, in place of the configured action of the rule in the rule group. See `action` for details.",
      wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the rule to override. See the [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html) for a list of names in the appropriate rule group in use.",
      [],
      true,
      false,
    ),
  ];
}
