import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SnapshotCopyArgs {
  // A description of what the snapshot is.
  description?: string;

  // Whether the snapshot is encrypted.
  encrypted?: boolean;

  // The region of the source snapshot.
  sourceRegion?: string;

  // A map of tags for the snapshot.
  tags?: Map<string, string>;

  // The ARN for the KMS encryption key.
  kmsKeyId?: string;

  // Indicates whether to permanently restore an archived snapshot.
  permanentRestore?: boolean;

  // The ARN for the snapshot to be copied.
  sourceSnapshotId?: string;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  storageTier?: string;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  temporaryRestoreDays?: number;
}
export class SnapshotCopy extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public volumeId?: string;

  // The size of the drive in GiBs.
  public volumeSize?: number;

  //
  public outpostArn?: string;

  // Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
  public ownerAlias?: string;

  // The region of the source snapshot.
  public sourceRegion?: string;

  // A map of tags for the snapshot.
  public tags?: Map<string, string>;

  // A description of what the snapshot is.
  public description?: string;

  // The AWS account ID of the snapshot owner.
  public ownerId?: string;

  // The data encryption key identifier for the snapshot.
  public dataEncryptionKeyId?: string;

  // Whether the snapshot is encrypted.
  public encrypted?: boolean;

  // The ARN for the snapshot to be copied.
  public sourceSnapshotId?: string;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  public storageTier?: string;

  // Amazon Resource Name (ARN) of the EBS Snapshot.
  public arn?: string;

  // The ARN for the KMS encryption key.
  public kmsKeyId?: string;

  // Indicates whether to permanently restore an archived snapshot.
  public permanentRestore?: boolean;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  public temporaryRestoreDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN for the KMS encryption key.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceSnapshotId",
        "The ARN for the snapshot to be copied.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageTier",
        "The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "temporaryRestoreDays",
        "Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of what the snapshot is.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encrypted",
        "Whether the snapshot is encrypted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceRegion",
        "The region of the source snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags for the snapshot.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "permanentRestore",
        "Indicates whether to permanently restore an archived snapshot.",
        [],
        false,
        false,
      ),
    ];
  }
}
