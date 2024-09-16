import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetailsEventSourceParameters,
  dlm_LifecyclePolicyPolicyDetailsEventSourceParameters_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsEventSourceParameters';

export interface dlm_LifecyclePolicyPolicyDetailsEventSource {
  // The source of the event. Currently only managed CloudWatch Events rules are supported. Valid values are `MANAGED_CWE`.
  type?: string;

  //
  parameters?: dlm_LifecyclePolicyPolicyDetailsEventSourceParameters;
}

export function dlm_LifecyclePolicyPolicyDetailsEventSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'parameters',
      '',
      () => dlm_LifecyclePolicyPolicyDetailsEventSourceParameters_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The source of the event. Currently only managed CloudWatch Events rules are supported. Valid values are `MANAGED_CWE`.',
      () => [],
      true,
      false,
    ),
  ];
}
