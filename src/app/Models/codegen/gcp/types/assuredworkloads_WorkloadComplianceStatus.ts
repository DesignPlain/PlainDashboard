import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface assuredworkloads_WorkloadComplianceStatus {
  // Number of current orgPolicy violations which are acknowledged.
  acknowledgedViolationCounts?: Array<number>;

  // Number of current orgPolicy violations which are not acknowledged.
  activeViolationCounts?: Array<number>;
}

export function assuredworkloads_WorkloadComplianceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'acknowledgedViolationCounts',
      'Number of current orgPolicy violations which are acknowledged.',
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'activeViolationCounts',
      'Number of current orgPolicy violations which are not acknowledged.',
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
