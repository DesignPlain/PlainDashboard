import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  rds_GlobalClusterGlobalClusterMember,
  rds_GlobalClusterGlobalClusterMember_GetTypes,
} from "../types/rds_GlobalClusterGlobalClusterMember";

export interface GlobalClusterArgs {
  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.
  engine?: string;

  // Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. --NOTE:-- To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.
  engineVersion?: string;

  // Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.
  forceDestroy?: boolean;

  // Global cluster identifier.
  globalClusterIdentifier?: string;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  sourceDbClusterIdentifier?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  storageEncrypted?: boolean;

  // Name for an automatically created database on cluster creation.
  databaseName?: string;

  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  deletionProtection?: boolean;
}
export class GlobalCluster extends Resource {
  // Set of objects containing Global Cluster members.
  public globalClusterMembers?: Array<rds_GlobalClusterGlobalClusterMember>;

  // AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
  public globalClusterResourceId?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  public storageEncrypted?: boolean;

  // RDS Global Cluster Amazon Resource Name (ARN)
  public arn?: string;

  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.
  public engine?: string;

  // Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. --NOTE:-- To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.
  public engineVersion?: string;

  // Global cluster identifier.
  public globalClusterIdentifier?: string;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  public sourceDbClusterIdentifier?: string;

  // Name for an automatically created database on cluster creation.
  public databaseName?: string;

  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  public deletionProtection?: boolean;

  //
  public engineVersionActual?: string;

  // Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.
  public forceDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. **NOTE:** To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalClusterIdentifier",
        "Global cluster identifier.",
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
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name for an automatically created database on cluster creation.",
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
    ];
  }
}
