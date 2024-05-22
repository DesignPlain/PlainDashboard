import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  memorydb_SnapshotClusterConfiguration,
  memorydb_SnapshotClusterConfiguration_GetTypes,
} from "../types/memorydb_SnapshotClusterConfiguration";

export interface SnapshotArgs {
  // Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the MemoryDB cluster to take a snapshot of.
  clusterName?: string;

  // ARN of the KMS key used to encrypt the snapshot at rest.
  kmsKeyArn?: string;
}
export class Snapshot extends Resource {
  // Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the snapshot.
  public arn?: string;

  // The configuration of the cluster from which the snapshot was taken.
  public clusterConfigurations?: Array<memorydb_SnapshotClusterConfiguration>;

  // Name of the MemoryDB cluster to take a snapshot of.
  public clusterName?: string;

  // ARN of the KMS key used to encrypt the snapshot at rest.
  public kmsKeyArn?: string;

  // Indicates whether the snapshot is from an automatic backup (`automated`) or was created manually (`manual`).
  public source?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the snapshot. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the MemoryDB cluster to take a snapshot of.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN of the KMS key used to encrypt the snapshot at rest.",
        [],
        false,
        true,
      ),
    ];
  }
}
