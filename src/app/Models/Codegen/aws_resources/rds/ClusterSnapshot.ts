import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ClusterSnapshotArgs {
  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The DB Cluster Identifier from which to take the snapshot.
  dbClusterIdentifier?: string;

  // The Identifier for the snapshot.
  dbClusterSnapshotIdentifier?: string;
}
export class ClusterSnapshot extends Resource {
  // Name of the database engine.
  public engine?: string;

  // Version of the database engine for this DB cluster snapshot.
  public engineVersion?: string;

  // Port that the DB cluster was listening on at the time of the snapshot.
  public port?: number;

  // The status of this DB Cluster Snapshot.
  public status?: string;

  // If storage_encrypted is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.
  public kmsKeyId?: string;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The VPC ID associated with the DB cluster snapshot.
  public vpcId?: string;

  // The Amazon Resource Name (ARN) for the DB Cluster Snapshot.
  public dbClusterSnapshotArn?: string;

  // The Identifier for the snapshot.
  public dbClusterSnapshotIdentifier?: string;

  // License model information for the restored DB cluster.
  public licenseModel?: string;

  //
  public snapshotType?: string;

  //
  public sourceDbClusterSnapshotArn?: string;

  // Allocated storage size in gigabytes (GB).
  public allocatedStorage?: number;

  // List of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
  public availabilityZones?: Array<string>;

  // The DB Cluster Identifier from which to take the snapshot.
  public dbClusterIdentifier?: string;

  // Whether the DB cluster snapshot is encrypted.
  public storageEncrypted?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbClusterSnapshotIdentifier",
        "The Identifier for the snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterIdentifier",
        "The DB Cluster Identifier from which to take the snapshot.",
        [],
        true,
        true,
      ),
    ];
  }
}
