import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_getClusterUpgradePolicy {
  // (Optional) Support type to use for the cluster.
  supportType?: string;
}

export function eks_getClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'supportType',
      '(Optional) Support type to use for the cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
