import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SnapshotArgs {
  // The DB Instance Identifier from which to take the snapshot.
  dbInstanceIdentifier?: string;

  // The Identifier for the snapshot.
  dbSnapshotIdentifier?: string;

  // List of AWS Account ids to share snapshot with, use `all` to make snaphot public.
  sharedAccounts?: Array<string>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Snapshot extends Resource {
  //
  public snapshotType?: string;

  // The DB snapshot Arn that the DB snapshot was copied from. It only has value in case of cross customer or cross region copy.
  public sourceDbSnapshotIdentifier?: string;

  // The region that the DB snapshot was created in or copied from.
  public sourceRegion?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Provides the VPC ID associated with the DB snapshot.
  public vpcId?: string;

  // The Amazon Resource Name (ARN) for the DB snapshot.
  public dbSnapshotArn?: string;

  // Specifies the name of the database engine.
  public engine?: string;

  // Specifies the version of the database engine.
  public engineVersion?: string;

  // License model information for the restored DB instance.
  public licenseModel?: string;

  // Provides the option group name for the DB snapshot.
  public optionGroupName?: string;

  // Specifies the status of this DB snapshot.
  public status?: string;

  // Specifies the storage type associated with DB snapshot.
  public storageType?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
  public availabilityZone?: string;

  // Specifies whether the DB snapshot is encrypted.
  public encrypted?: boolean;

  // Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
  public iops?: number;

  // The DB Instance Identifier from which to take the snapshot.
  public dbInstanceIdentifier?: string;

  // The Identifier for the snapshot.
  public dbSnapshotIdentifier?: string;

  // The ARN for the KMS encryption key.
  public kmsKeyId?: string;

  // Specifies the allocated storage size in gigabytes (GB).
  public allocatedStorage?: number;

  //
  public port?: number;

  // List of AWS Account ids to share snapshot with, use `all` to make snaphot public.
  public sharedAccounts?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbInstanceIdentifier",
        "The DB Instance Identifier from which to take the snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSnapshotIdentifier",
        "The Identifier for the snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sharedAccounts",
        "List of AWS Account ids to share snapshot with, use `all` to make snaphot public.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
