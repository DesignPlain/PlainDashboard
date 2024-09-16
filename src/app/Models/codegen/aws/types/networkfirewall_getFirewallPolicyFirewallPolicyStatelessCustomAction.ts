import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition,
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes,
} from './networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition';

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction {
  //
  actionDefinitions?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition>;

  //
  actionName?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'actionDefinitions',
      '',
      () =>
        networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'actionName',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
