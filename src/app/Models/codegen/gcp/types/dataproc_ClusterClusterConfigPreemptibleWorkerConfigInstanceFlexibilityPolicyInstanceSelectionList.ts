import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList {
  // Full machine-type names, e.g. `"n1-standard-16"`.
  machineTypes?: Array<string>;

  /*
Preference of this instance selection. A lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.

- - -
*/
  rank?: number;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'machineTypes',
      'Full machine-type names, e.g. `"n1-standard-16"`.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'rank',
      'Preference of this instance selection. A lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.\n\n- - -',
      () => [],
      false,
      true,
    ),
  ];
}
