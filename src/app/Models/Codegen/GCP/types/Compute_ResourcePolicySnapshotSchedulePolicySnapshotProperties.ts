import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties {
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
  StorageLocations?: string;
}

export function Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ChainName",
      "Creates the new snapshot in the snapshot chain labeled with the\nspecified name. The chain name must be 1-63 characters long and comply\nwith RFC1035.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "GuestFlush",
      "Whether to perform a 'guest aware' snapshot.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A set of key-value pairs.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StorageLocations",
      "Cloud Storage bucket location to store the auto snapshot\n(regional or multi-regional)",
      [],
      false,
      true,
    ),
  ];
}
