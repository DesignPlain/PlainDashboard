import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FeatureMembershipConfigmanagementBinauthz {
  // Whether binauthz is enabled in this cluster.
  enabled?: boolean;
}

export function gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether binauthz is enabled in this cluster.',
      () => [],
      false,
      false,
    ),
  ];
}
