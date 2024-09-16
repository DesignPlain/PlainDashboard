import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClusterSnapshotArgs {
  // The DocumentDB Cluster Identifier from which to take the snapshot.
  dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  dbClusterSnapshotIdentifier?: string;
}
export class ClusterSnapshot extends DS_Resource {
  // The Amazon Resource Name (ARN) for the DocumentDB Cluster Snapshot.
  public dbClusterSnapshotArn?: string;

  // Version of the database engine for this DocumentDB cluster snapshot.
  public engineVersion?: string;

  // If storage_encrypted is true, the AWS KMS key identifier for the encrypted DocumentDB cluster snapshot.
  public kmsKeyId?: string;

  //
  public snapshotType?: string;

  // The DocumentDB Cluster Identifier from which to take the snapshot.
  public dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  public dbClusterSnapshotIdentifier?: string;

  // Specifies the name of the database engine.
  public engine?: string;

  // Port that the DocumentDB cluster was listening on at the time of the snapshot.
  public port?: number;

  //
  public sourceDbClusterSnapshotArn?: string;

  // The status of this DocumentDB Cluster Snapshot.
  public status?: string;

  // Specifies whether the DocumentDB cluster snapshot is encrypted.
  public storageEncrypted?: boolean;

  // The VPC ID associated with the DocumentDB cluster snapshot.
  public vpcId?: string;

  // List of EC2 Availability Zones that instances in the DocumentDB cluster snapshot can be restored in.
  public availabilityZones?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'dbClusterSnapshotIdentifier',
        'The Identifier for the snapshot.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbClusterIdentifier',
        'The DocumentDB Cluster Identifier from which to take the snapshot.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
