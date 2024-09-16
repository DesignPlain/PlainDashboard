import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty {
  // Whether to perform a 'guest aware' snapshot.
  guestFlush?: boolean;

  // A set of key-value pairs.
  labels?: Map<string, string>;

  /*
Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional)
*/
  storageLocations?: Array<string>;

  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and comply
with RFC1035.
*/
  chainName?: string;
}

export function compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'guestFlush',
      "Whether to perform a 'guest aware' snapshot.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'A set of key-value pairs.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'storageLocations',
      'Cloud Storage bucket location to store the auto snapshot\n(regional or multi-regional)',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'chainName',
      'Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and comply\nwith RFC1035.',
      () => [],
      true,
      false,
    ),
  ];
}
