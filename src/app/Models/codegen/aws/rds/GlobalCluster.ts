import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rds_GlobalClusterGlobalClusterMember,
  rds_GlobalClusterGlobalClusterMember_GetTypes,
} from "../types/rds_GlobalClusterGlobalClusterMember";

export interface GlobalClusterArgs {
  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  deletionProtection?: boolean;

  // Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. --NOTE:-- To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.
  engineVersion?: string;

  // Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.
  forceDestroy?: boolean;

  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  storageEncrypted?: boolean;

  // Name for an automatically created database on cluster creation.
  databaseName?: string;

  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.
  engine?: string;

  // The life cycle type for this DB instance. This setting applies only to Aurora PostgreSQL-based global databases. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html
  engineLifecycleSupport?: string;

  // Global cluster identifier.
  globalClusterIdentifier?: string;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  sourceDbClusterIdentifier?: string;
}
export class GlobalCluster extends DS_Resource {
  // If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
  public deletionProtection?: boolean;

  // Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. --NOTE:-- To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.
  public engineVersion?: string;

  // Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.
  public forceDestroy?: boolean;

  // Global cluster identifier.
  public globalClusterIdentifier?: string;

  // Set of objects containing Global Cluster members.
  public globalClusterMembers?: Array<rds_GlobalClusterGlobalClusterMember>;

  // Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.
  public sourceDbClusterIdentifier?: string;

  // RDS Global Cluster Amazon Resource Name (ARN)
  public arn?: string;

  // Name for an automatically created database on cluster creation.
  public databaseName?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.
  public storageEncrypted?: boolean;

  //
  public engineVersionActual?: string;

  // AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
  public globalClusterResourceId?: string;

  // Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.
  public engine?: string;

  // The life cycle type for this DB instance. This setting applies only to Aurora PostgreSQL-based global databases. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html
  public engineLifecycleSupport?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name for an automatically created database on cluster creation.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for this DB cluster. The provider will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineLifecycleSupport",
        "The life cycle type for this DB instance. This setting applies only to Aurora PostgreSQL-based global databases. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalClusterIdentifier",
        "Global cluster identifier.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. The provider will only perform drift detection if a configuration value is provided.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDbClusterIdentifier",
        "Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. The provider cannot perform drift detection of this value.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws.rds.ClusterInstance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, the provider will upgrade cluster members. **NOTE:** To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws.rds.Cluster` resource as shown above in Upgrading Engine Versions example.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
