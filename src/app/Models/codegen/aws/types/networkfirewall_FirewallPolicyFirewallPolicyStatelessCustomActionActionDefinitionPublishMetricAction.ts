import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension,
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes,
} from "./networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension";

export interface networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  // Set of configuration blocks describing dimension settings to use for Amazon CloudWatch custom metrics. See Dimension below for more details.
  dimensions?: Array<networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension>;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Set of configuration blocks describing dimension settings to use for Amazon CloudWatch custom metrics. See Dimension below for more details.",
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
