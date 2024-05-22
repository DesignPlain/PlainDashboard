import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference,
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference";

export interface networkfirewall_RuleGroupRuleGroupReferenceSets {
  //
  ipSetReferences?: Array<networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference>;
}

export function networkfirewall_RuleGroupRuleGroupReferenceSets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipSetReferences",
      "",
      networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference_GetTypes(),
      false,
      false,
    ),
  ];
}
