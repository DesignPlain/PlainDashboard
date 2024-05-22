import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference,
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes,
} from "./networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference";
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption,
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption_GetTypes,
} from "./networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption";
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference,
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes,
} from "./networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference";
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction,
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes,
} from "./networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction";

export interface networkfirewall_getFirewallPolicyFirewallPolicy {
  //
  statelessFragmentDefaultActions?: Array<string>;

  //
  statelessRuleGroupReferences?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference>;

  //
  tlsInspectionConfigurationArn?: string;

  //
  statefulDefaultActions?: Array<string>;

  //
  statefulEngineOptions?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption>;

  //
  statefulRuleGroupReferences?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference>;

  //
  statelessCustomActions?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction>;

  //
  statelessDefaultActions?: Array<string>;
}

export function networkfirewall_getFirewallPolicyFirewallPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "statelessRuleGroupReferences",
      "",
      networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tlsInspectionConfigurationArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefulDefaultActions",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefulEngineOptions",
      "",
      networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefulRuleGroupReferences",
      "",
      networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statelessCustomActions",
      "",
      networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statelessDefaultActions",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statelessFragmentDefaultActions",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
