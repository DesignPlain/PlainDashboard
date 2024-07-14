import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  neptune_GlobalClusterGlobalClusterMember,
  neptune_GlobalClusterGlobalClusterMember_GetTypes,
} from "../types/neptune_GlobalClusterGlobalClusterMember";

export interface GlobalClusterArgs {
  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  storageEncrypted?: boolean;

  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  deletionProtection?: boolean;

  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Current Valid values: `neptune`. Conflicts with `source_db_cluster_identifier`.
  engine?: string;

  /*
Engine version of the global database. Upgrading the engine version will result in all cluster members being immediately updated and will.
- --NOTE:-- Upgrading major versions is not supported.
*/
  engineVersion?: string;

  // The global cluster identifier.
  globalClusterIdentifier?: string;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  sourceDbClusterIdentifier?: string;
}
export class GlobalCluster extends Resource {
  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  public deletionProtection?: boolean;

  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Current Valid values: `neptune`. Conflicts with `source_db_cluster_identifier`.
  public engine?: string;

  // The global cluster identifier.
  public globalClusterIdentifier?: string;

  //
  public status?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  public storageEncrypted?: boolean;

  // Global Cluster Amazon Resource Name (ARN)
  public arn?: string;

  /*
Engine version of the global database. Upgrading the engine version will result in all cluster members being immediately updated and will.
- --NOTE:-- Upgrading major versions is not supported.
*/
  public engineVersion?: string;

  // Set of objects containing Global Cluster members.
  public globalClusterMembers?: Array<neptune_GlobalClusterGlobalClusterMember>;

  // AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
  public globalClusterResourceId?: string;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  public sourceDbClusterIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Current Valid values: `neptune`. Conflicts with `source_db_cluster_identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Engine version of the global database. Upgrading the engine version will result in all cluster members being immediately updated and will.\n* **NOTE:** Upgrading major versions is not supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalClusterIdentifier",
        "The global cluster identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDbClusterIdentifier",
        "Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.",
        [],
        false,
        true,
      ),
    ];
  }
}
