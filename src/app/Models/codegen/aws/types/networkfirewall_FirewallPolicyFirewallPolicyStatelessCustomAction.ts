import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition,
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition';

export interface networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction {
  // A configuration block describing the custom action associated with the `action_name`. See Action Definition below for details.
  actionDefinition?: networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition;

  // A friendly name of the custom action.
  actionName?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'actionDefinition',
      'A configuration block describing the custom action associated with the `action_name`. See Action Definition below for details.',
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'actionName',
      'A friendly name of the custom action.',
      () => [],
      true,
      true,
    ),
  ];
}
