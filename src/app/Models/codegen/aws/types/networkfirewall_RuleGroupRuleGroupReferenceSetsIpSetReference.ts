import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference,
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference";

export interface networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference {
  // Set of configuration blocks that define the IP Reference information. See IP Set Reference below for details.
  ipSetReferences?: Array<networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference>;

  //
  key?: string;
}

export function networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ipSetReferences",
      "Set of configuration blocks that define the IP Reference information. See IP Set Reference below for details.",
      () =>
        networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference_GetTypes(),
      true,
      false,
    ),
  ];
}
