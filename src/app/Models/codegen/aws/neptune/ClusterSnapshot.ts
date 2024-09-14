import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ClusterSnapshotArgs {
  // The DB Cluster Identifier from which to take the snapshot.
  dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  dbClusterSnapshotIdentifier?: string;
}
export class ClusterSnapshot extends DS_Resource {
  // The DB Cluster Identifier from which to take the snapshot.
  public dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  public dbClusterSnapshotIdentifier?: string;

  // The status of this DB Cluster Snapshot.
  public status?: string;

  // Specifies the name of the database engine.
  public engine?: string;

  // Port that the DB cluster was listening on at the time of the snapshot.
  public port?: number;

  //
  public snapshotType?: string;

  //
  public sourceDbClusterSnapshotArn?: string;

  // Specifies the allocated storage size in gigabytes (GB).
  public allocatedStorage?: number;

  // List of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
  public availabilityZones?: Array<string>;

  // License model information for the restored DB cluster.
  public licenseModel?: string;

  // Specifies whether the DB cluster snapshot is encrypted.
  public storageEncrypted?: boolean;

  // The Amazon Resource Name (ARN) for the DB Cluster Snapshot.
  public dbClusterSnapshotArn?: string;

  // Version of the database engine for this DB cluster snapshot.
  public engineVersion?: string;

  // If storage_encrypted is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.
  public kmsKeyId?: string;

  // The VPC ID associated with the DB cluster snapshot.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbClusterIdentifier",
        "The DB Cluster Identifier from which to take the snapshot.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterSnapshotIdentifier",
        "The Identifier for the snapshot.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
