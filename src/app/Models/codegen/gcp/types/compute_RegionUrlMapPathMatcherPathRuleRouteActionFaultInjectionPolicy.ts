import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from './compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort';
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from './compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay';

export interface compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'abort',
      'The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'delay',
      'The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
