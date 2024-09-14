import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  memorydb_SnapshotClusterConfiguration,
  memorydb_SnapshotClusterConfiguration_GetTypes,
} from "../types/memorydb_SnapshotClusterConfiguration";

export interface SnapshotArgs {
  // Name of the MemoryDB cluster to take a snapshot of.
  clusterName?: string;

  // ARN of the KMS key used to encrypt the snapshot at rest.
  kmsKeyArn?: string;

  // Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Snapshot extends DS_Resource {
  // The configuration of the cluster from which the snapshot was taken.
  public clusterConfigurations?: Array<memorydb_SnapshotClusterConfiguration>;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the snapshot.
  public arn?: string;

  // Name of the MemoryDB cluster to take a snapshot of.
  public clusterName?: string;

  // ARN of the KMS key used to encrypt the snapshot at rest.
  public kmsKeyArn?: string;

  // Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Indicates whether the snapshot is from an automatic backup (`automated`) or was created manually (`manual`).
  public source?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the MemoryDB cluster to take a snapshot of.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN of the KMS key used to encrypt the snapshot at rest.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
