import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction,
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes,
} from './networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction';

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  //
  publishMetricActions?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction>;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'publishMetricActions',
      '',
      () =>
        networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes(),
      true,
      false,
    ),
  ];
}
