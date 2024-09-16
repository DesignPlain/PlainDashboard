import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClusterSnapshotArgs {
  // The DB Cluster Identifier from which to take the snapshot.
  dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  dbClusterSnapshotIdentifier?: string;

  // List of AWS Account ids to share snapshot with, use `all` to make snaphot public.
  sharedAccounts?: Array<string>;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ClusterSnapshot extends DS_Resource {
  // The Amazon Resource Name (ARN) for the DB Cluster Snapshot.
  public dbClusterSnapshotArn?: string;

  // List of AWS Account ids to share snapshot with, use `all` to make snaphot public.
  public sharedAccounts?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // List of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
  public availabilityZones?: Array<string>;

  // If storage_encrypted is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.
  public kmsKeyId?: string;

  // The status of this DB Cluster Snapshot.
  public status?: string;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Allocated storage size in gigabytes (GB).
  public allocatedStorage?: number;

  // Name of the database engine.
  public engine?: string;

  // Version of the database engine for this DB cluster snapshot.
  public engineVersion?: string;

  // License model information for the restored DB cluster.
  public licenseModel?: string;

  // Whether the DB cluster snapshot is encrypted.
  public storageEncrypted?: boolean;

  // The Identifier for the snapshot.
  public dbClusterSnapshotIdentifier?: string;

  // Port that the DB cluster was listening on at the time of the snapshot.
  public port?: number;

  //
  public snapshotType?: string;

  //
  public sourceDbClusterSnapshotArn?: string;

  // The VPC ID associated with the DB cluster snapshot.
  public vpcId?: string;

  // The DB Cluster Identifier from which to take the snapshot.
  public dbClusterIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'dbClusterIdentifier',
        'The DB Cluster Identifier from which to take the snapshot.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbClusterSnapshotIdentifier',
        'The Identifier for the snapshot.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'sharedAccounts',
        'List of AWS Account ids to share snapshot with, use `all` to make snaphot public.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
