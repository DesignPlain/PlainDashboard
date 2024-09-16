import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ebs_SnapshotImportClientData,
  ebs_SnapshotImportClientData_GetTypes,
} from '../types/ebs_SnapshotImportClientData';
import {
  ebs_SnapshotImportDiskContainer,
  ebs_SnapshotImportDiskContainer_GetTypes,
} from '../types/ebs_SnapshotImportDiskContainer';

export interface SnapshotImportArgs {
  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  storageTier?: string;

  // A map of tags to assign to the snapshot.
  tags?: Map<string, string>;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  temporaryRestoreDays?: number;

  // The client-specific data. Detailed below.
  clientData?: ebs_SnapshotImportClientData;

  // Indicates whether to permanently restore an archived snapshot.
  permanentRestore?: boolean;

  // Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.
  encrypted?: boolean;

  // An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.
  kmsKeyId?: string;

  // The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`
  roleName?: string;

  // The description string for the import snapshot task.
  description?: string;

  // Information about the disk container. Detailed below.
  diskContainer?: ebs_SnapshotImportDiskContainer;
}
export class SnapshotImport extends DS_Resource {
  // An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.
  public kmsKeyId?: string;

  // Indicates whether to permanently restore an archived snapshot.
  public permanentRestore?: boolean;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  public storageTier?: string;

  // The size of the drive in GiBs.
  public volumeSize?: number;

  // Amazon Resource Name (ARN) of the EBS Snapshot.
  public arn?: string;

  // The client-specific data. Detailed below.
  public clientData?: ebs_SnapshotImportClientData;

  // The data encryption key identifier for the snapshot.
  public dataEncryptionKeyId?: string;

  //
  public outpostArn?: string;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  public temporaryRestoreDays?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public volumeId?: string;

  // The description string for the import snapshot task.
  public description?: string;

  // The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`
  public roleName?: string;

  // A map of tags to assign to the snapshot.
  public tags?: Map<string, string>;

  // The AWS account ID of the EBS snapshot owner.
  public ownerId?: string;

  // Information about the disk container. Detailed below.
  public diskContainer?: ebs_SnapshotImportDiskContainer;

  // Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.
  public encrypted?: boolean;

  // Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
  public ownerAlias?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the snapshot.',
        () => InputType_Map_GetTypes(),
        false,
        false,
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
        'roleName',
        'The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description string for the import snapshot task.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'diskContainer',
        'Information about the disk container. Detailed below.',
        () => ebs_SnapshotImportDiskContainer_GetTypes(),
        true,
        true,
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
        InputType.Number,
        'temporaryRestoreDays',
        'Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clientData',
        'The client-specific data. Detailed below.',
        () => ebs_SnapshotImportClientData_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'encrypted',
        'Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
