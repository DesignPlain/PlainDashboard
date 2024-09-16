import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay,
  networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay_GetTypes,
} from './networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay';
import {
  networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort,
  networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort_GetTypes,
} from './networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort';

export interface networkservices_HttpRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  delay?: networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay;

  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  abort?: networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort;
}

export function networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'delay',
      'Specification of how client requests are delayed as part of fault injection before being sent to a destination.\nStructure is documented below.',
      () =>
        networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'abort',
      'Specification of how client requests are aborted as part of fault injection before being sent to a destination.\nStructure is documented below.',
      () =>
        networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
  ];
}
