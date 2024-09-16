import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SnapshotArgs {
  // Indicates whether to permanently restore an archived snapshot.
  permanentRestore?: boolean;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  storageTier?: string;

  // A map of tags to assign to the snapshot. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  temporaryRestoreDays?: number;

  // The Volume ID of which to make a snapshot.
  volumeId?: string;

  // A description of what the snapshot is.
  description?: string;

  // The Amazon Resource Name (ARN) of the Outpost on which to create a local snapshot.
  outpostArn?: string;
}
export class Snapshot extends DS_Resource {
  // Amazon Resource Name (ARN) of the EBS Snapshot.
  public arn?: string;

  // The data encryption key identifier for the snapshot.
  public dataEncryptionKeyId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The size of the drive in GiBs.
  public volumeSize?: number;

  // A description of what the snapshot is.
  public description?: string;

  // Whether the snapshot is encrypted.
  public encrypted?: boolean;

  // The Amazon Resource Name (ARN) of the Outpost on which to create a local snapshot.
  public outpostArn?: string;

  // The Volume ID of which to make a snapshot.
  public volumeId?: string;

  // The ARN for the KMS encryption key.
  public kmsKeyId?: string;

  // Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
  public ownerAlias?: string;

  // The AWS account ID of the EBS snapshot owner.
  public ownerId?: string;

  // Indicates whether to permanently restore an archived snapshot.
  public permanentRestore?: boolean;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  public storageTier?: string;

  // A map of tags to assign to the snapshot. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  public temporaryRestoreDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'volumeId',
        'The Volume ID of which to make a snapshot.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of what the snapshot is.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'outpostArn',
        'The Amazon Resource Name (ARN) of the Outpost on which to create a local snapshot.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'permanentRestore',
        'Indicates whether to permanently restore an archived snapshot.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'storageTier',
        'The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the snapshot. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'temporaryRestoreDays',
        'Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
