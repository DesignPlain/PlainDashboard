import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction,
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes,
} from "./networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction";

export interface networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  // A configuration block describing the stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. You can pair this custom action with any of the standard stateless rule actions. See Publish Metric Action below for details.
  publishMetricAction?: networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "publishMetricAction",
      "A configuration block describing the stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. You can pair this custom action with any of the standard stateless rule actions. See Publish Metric Action below for details.",
      networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes(),
      true,
      false,
    ),
  ];
}
