import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
  //
  priority?: number;

  //
  resourceArn?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "priority", "", [], true, false),
    new DynamicUIProps(InputType.String, "resourceArn", "", [], true, false),
  ];
}
