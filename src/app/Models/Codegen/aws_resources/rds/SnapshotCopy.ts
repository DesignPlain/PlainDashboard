import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SnapshotCopyArgs {
  // Whether to copy existing tags. Defaults to `false`.
  copyTags?: boolean;

  // he URL that contains a Signature Version 4 signed request.
  presignedUrl?: string;

  // Snapshot identifier of the source snapshot.
  sourceDbSnapshotIdentifier?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The external custom Availability Zone.
  targetCustomAvailabilityZone?: string;

  // The Identifier for the snapshot.
  targetDbSnapshotIdentifier?: string;

  // The Destination region to place snapshot copy.
  destinationRegion?: string;

  // KMS key ID.
  kmsKeyId?: string;

  // The name of an option group to associate with the copy of the snapshot.
  optionGroupName?: string;
}
export class SnapshotCopy extends Resource {
  // he URL that contains a Signature Version 4 signed request.
  public presignedUrl?: string;

  // The Identifier for the snapshot.
  public targetDbSnapshotIdentifier?: string;

  // Specifies the name of the database engine.
  public engine?: string;

  // Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
  public iops?: number;

  // KMS key ID.
  public kmsKeyId?: string;

  //
  public port?: number;

  // Provides the VPC ID associated with the DB snapshot.
  public vpcId?: string;

  // Specifies the allocated storage size in gigabytes (GB).
  public allocatedStorage?: number;

  // Whether to copy existing tags. Defaults to `false`.
  public copyTags?: boolean;

  // Specifies the storage type associated with DB snapshot.
  public storageType?: string;

  // The external custom Availability Zone.
  public targetCustomAvailabilityZone?: string;

  // License model information for the restored DB instance.
  public licenseModel?: string;

  // The name of an option group to associate with the copy of the snapshot.
  public optionGroupName?: string;

  //
  public snapshotType?: string;

  // Snapshot identifier of the source snapshot.
  public sourceDbSnapshotIdentifier?: string;

  // The Amazon Resource Name (ARN) for the DB snapshot.
  public dbSnapshotArn?: string;

  // The Destination region to place snapshot copy.
  public destinationRegion?: string;

  // Specifies whether the DB snapshot is encrypted.
  public encrypted?: boolean;

  // Specifies the version of the database engine.
  public engineVersion?: string;

  // The region that the DB snapshot was created in or copied from.
  public sourceRegion?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
  public availabilityZone?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "copyTags",
        "Whether to copy existing tags. Defaults to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "presignedUrl",
        "he URL that contains a Signature Version 4 signed request.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetCustomAvailabilityZone",
        "The external custom Availability Zone.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDbSnapshotIdentifier",
        "Snapshot identifier of the source snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetDbSnapshotIdentifier",
        "The Identifier for the snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationRegion",
        "The Destination region to place snapshot copy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "KMS key ID.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "optionGroupName",
        "The name of an option group to associate with the copy of the snapshot.",
        [],
        false,
        true,
      ),
    ];
  }
}
