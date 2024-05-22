import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ebs_SnapshotImportDiskContainer,
  ebs_SnapshotImportDiskContainer_GetTypes,
} from "../types/ebs_SnapshotImportDiskContainer";
import {
  ebs_SnapshotImportClientData,
  ebs_SnapshotImportClientData_GetTypes,
} from "../types/ebs_SnapshotImportClientData";

export interface SnapshotImportArgs {
  // The description string for the import snapshot task.
  description?: string;

  // Information about the disk container. Detailed below.
  diskContainer?: ebs_SnapshotImportDiskContainer;

  // An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.
  kmsKeyId?: string;

  // Indicates whether to permanently restore an archived snapshot.
  permanentRestore?: boolean;

  // The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`
  roleName?: string;

  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  storageTier?: string;

  // A map of tags to assign to the snapshot.
  tags?: Map<string, string>;

  // The client-specific data. Detailed below.
  clientData?: ebs_SnapshotImportClientData;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  temporaryRestoreDays?: number;

  // Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.
  encrypted?: boolean;
}
export class SnapshotImport extends Resource {
  // The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`.
  public storageTier?: string;

  //
  public outpostArn?: string;

  // Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
  public ownerAlias?: string;

  // The AWS account ID of the EBS snapshot owner.
  public ownerId?: string;

  // A map of tags to assign to the snapshot.
  public tags?: Map<string, string>;

  // The size of the drive in GiBs.
  public volumeSize?: number;

  // The client-specific data. Detailed below.
  public clientData?: ebs_SnapshotImportClientData;

  // The data encryption key identifier for the snapshot.
  public dataEncryptionKeyId?: string;

  // The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`
  public roleName?: string;

  // An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.
  public kmsKeyId?: string;

  //
  public volumeId?: string;

  // Amazon Resource Name (ARN) of the EBS Snapshot.
  public arn?: string;

  // The description string for the import snapshot task.
  public description?: string;

  // Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.
  public encrypted?: boolean;

  // Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
  public temporaryRestoreDays?: number;

  // Information about the disk container. Detailed below.
  public diskContainer?: ebs_SnapshotImportDiskContainer;

  // Indicates whether to permanently restore an archived snapshot.
  public permanentRestore?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "permanentRestore",
        "Indicates whether to permanently restore an archived snapshot.",
        [],
        false,
        false,
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
        InputType.Object,
        "clientData",
        "The client-specific data. Detailed below.",
        ebs_SnapshotImportClientData_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encrypted",
        "Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description string for the import snapshot task.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "diskContainer",
        "Information about the disk container. Detailed below.",
        ebs_SnapshotImportDiskContainer_GetTypes(),
        true,
        true,
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
        "roleName",
        "The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the snapshot.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
