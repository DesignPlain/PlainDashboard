import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty {
  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and comply
with RFC1035.
*/
  ChainName?: string;

  // Whether to perform a 'guest aware' snapshot.
  GuestFlush?: boolean;

  // A set of key-value pairs.
  Labels?: Map<string, string>;

  /*
Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional)
*/
  StorageLocations?: Array<string>;
}

export function Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ChainName",
      "Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and comply\nwith RFC1035.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "GuestFlush",
      "Whether to perform a 'guest aware' snapshot.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A set of key-value pairs.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StorageLocations",
      "Cloud Storage bucket location to store the auto snapshot\n(regional or multi-regional)",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
