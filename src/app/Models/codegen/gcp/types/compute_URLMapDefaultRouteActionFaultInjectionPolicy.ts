import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay,
  compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from './compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay';
import {
  compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort,
  compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from './compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort';

export interface compute_URLMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort;
}

export function compute_URLMapDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'delay',
      'The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.',
      () =>
        compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'abort',
      'The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.',
      () =>
        compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
  ];
}
