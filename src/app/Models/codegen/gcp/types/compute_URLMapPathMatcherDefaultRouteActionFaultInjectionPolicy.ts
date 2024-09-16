import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort,
  compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from './compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort';
import {
  compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay,
  compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from './compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay';

export interface compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}

export function compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'abort',
      'The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.',
      () =>
        compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'delay',
      'The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.',
      () =>
        compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
