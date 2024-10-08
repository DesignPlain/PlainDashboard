import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay,
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes,
} from './compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay';

export interface compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /*
Specifies the value of the fixed delay interval.
Structure is documented below.
*/
  fixedDelay?: compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;

  /*
The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  percentage?: number;
}

export function compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'fixedDelay',
      'Specifies the value of the fixed delay interval.\nStructure is documented below.',
      () =>
        compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'percentage',
      'The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.\nThe value must be between 0.0 and 100.0 inclusive.',
      () => [],
      true,
      false,
    ),
  ];
}
