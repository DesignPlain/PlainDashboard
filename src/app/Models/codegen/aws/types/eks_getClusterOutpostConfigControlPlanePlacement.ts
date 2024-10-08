import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_getClusterOutpostConfigControlPlanePlacement {
  // The name of the placement group for the Kubernetes control plane instances.
  groupName?: string;
}

export function eks_getClusterOutpostConfigControlPlanePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'groupName',
      'The name of the placement group for the Kubernetes control plane instances.',
      () => [],
      true,
      false,
    ),
  ];
}
