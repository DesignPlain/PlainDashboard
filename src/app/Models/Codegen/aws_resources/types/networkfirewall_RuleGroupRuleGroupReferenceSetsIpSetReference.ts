import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference,
  networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference";

export interface networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference {
  // A unique alphanumeric string to identify the `ip_set`.
  key?: string;

  // Set of configuration blocks that define the IP Reference information. See IP Set Reference below for details.
  ipSetReferences?: Array<networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference>;
}

export function networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "A unique alphanumeric string to identify the `ip_set`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipSetReferences",
      "Set of configuration blocks that define the IP Reference information. See IP Set Reference below for details.",
      networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference_GetTypes(),
      true,
      false,
    ),
  ];
}
