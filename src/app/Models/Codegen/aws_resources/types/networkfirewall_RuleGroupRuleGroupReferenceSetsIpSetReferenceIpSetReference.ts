import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference {
  // Set of Managed Prefix IP ARN(s)
  referenceArn?: string;
}

export function networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "referenceArn",
      "Set of Managed Prefix IP ARN(s)",
      [],
      true,
      false,
    ),
  ];
}
