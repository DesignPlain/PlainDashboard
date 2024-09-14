import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ClusterInstanceArgs {
  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  identifierPrefix?: string;

  // Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". --NOTE:-- If `preferred_backup_window` is set at the cluster level, this argument --must-- be omitted.
  preferredBackupWindow?: string;

  // Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
  preferredMaintenanceWindow?: string;

  // Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.
  applyImmediately?: boolean;

  // Identifier of the CA certificate for the DB instance.
  caCertIdentifier?: string;

  // Specifies the DB subnet group to associate with this DB instance. The default behavior varies depending on whether `db_subnet_group_name` is specified. Please refer to official [AWS documentation](https://docs.aws.amazon.com/cli/latest/reference/rds/create-db-instance.html) to understand how `db_subnet_group_name` and `publicly_accessible` parameters affect DB instance behaviour. --NOTE:-- This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.
  dbSubnetGroupName?: string;

  /*
Name of the database engine to be used for the RDS cluster instance.
Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`.(Note that `mysql` and `postgres` are Multi-AZ RDS clusters).
*/
  engine?: string;

  // Database engine version. Please note that to upgrade the `engine_version` of the instance, it must be done on the `aws.rds.Cluster` `engine_version`. Trying to upgrade in `aws_cluster_instance` will not update the `engine_version`.
  engineVersion?: string;

  // ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
  monitoringRoleArn?: string;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.
  publiclyAccessible?: boolean;

  // EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
  availabilityZone?: string;

  // Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  customIamInstanceProfile?: string;

  // Name of the DB parameter group to associate with this instance.
  dbParameterGroupName?: string;

  // Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.-` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details. For Aurora Serverless v2 use `db.serverless`.
  instanceClass?: string;

  // Specifies whether Performance Insights is enabled or not.
  performanceInsightsEnabled?: boolean;

  // ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
  performanceInsightsKmsKeyId?: string;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  performanceInsightsRetentionPeriod?: number;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.
  promotionTier?: number;

  // Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
  autoMinorVersionUpgrade?: boolean;

  // Identifier of the `aws.rds.Cluster` in which to launch this instance.
  clusterIdentifier?: string;

  // Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
  copyTagsToSnapshot?: boolean;

  // Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.
  identifier?: string;

  // Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
  monitoringInterval?: number;
}
export class ClusterInstance extends DS_Resource {
  // ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
  public monitoringRoleArn?: string;

  // ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
  public performanceInsightsKmsKeyId?: string;

  // Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". --NOTE:-- If `preferred_backup_window` is set at the cluster level, this argument --must-- be omitted.
  public preferredBackupWindow?: string;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.
  public promotionTier?: number;

  // DNS address for this instance. May not be writable
  public endpoint?: string;

  // Database port
  public port?: number;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Database engine version
  public engineVersionActual?: string;

  // ARN for the KMS encryption key if one is set to the cluster.
  public kmsKeyId?: string;

  // Network type of the DB instance.
  public networkType?: string;

  // Specifies whether the DB cluster is encrypted.
  public storageEncrypted?: boolean;

  // Amazon Resource Name (ARN) of cluster instance
  public arn?: string;

  // Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
  public autoMinorVersionUpgrade?: boolean;

  // Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
  public copyTagsToSnapshot?: boolean;

  // Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  public customIamInstanceProfile?: string;

  // Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.
  public identifier?: string;

  // Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.
  public publiclyAccessible?: boolean;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  public performanceInsightsRetentionPeriod?: number;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  public identifierPrefix?: string;

  // Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
  public writer?: boolean;

  // Identifier of the CA certificate for the DB instance.
  public caCertIdentifier?: string;

  // Identifier of the `aws.rds.Cluster` in which to launch this instance.
  public clusterIdentifier?: string;

  // Region-unique, immutable identifier for the DB instance.
  public dbiResourceId?: string;

  /*
Name of the database engine to be used for the RDS cluster instance.
Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`.(Note that `mysql` and `postgres` are Multi-AZ RDS clusters).
*/
  public engine?: string;

  // Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.
  public applyImmediately?: boolean;

  // Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.-` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details. For Aurora Serverless v2 use `db.serverless`.
  public instanceClass?: string;

  // Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
  public monitoringInterval?: number;

  // Specifies whether Performance Insights is enabled or not.
  public performanceInsightsEnabled?: boolean;

  // Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
  public preferredMaintenanceWindow?: string;

  // EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
  public availabilityZone?: string;

  // Name of the DB parameter group to associate with this instance.
  public dbParameterGroupName?: string;

  // Specifies the DB subnet group to associate with this DB instance. The default behavior varies depending on whether `db_subnet_group_name` is specified. Please refer to official [AWS documentation](https://docs.aws.amazon.com/cli/latest/reference/rds/create-db-instance.html) to understand how `db_subnet_group_name` and `publicly_accessible` parameters affect DB instance behaviour. --NOTE:-- This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.
  public dbSubnetGroupName?: string;

  // Database engine version. Please note that to upgrade the `engine_version` of the instance, it must be done on the `aws.rds.Cluster` `engine_version`. Trying to upgrade in `aws_cluster_instance` will not update the `engine_version`.
  public engineVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for the RDS cluster instance.\nValid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`.(Note that `mysql` and `postgres` are Multi-AZ RDS clusters).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Database engine version. Please note that to upgrade the `engine_version` of the instance, it must be done on the `aws.rds.Cluster` `engine_version`. Trying to upgrade in `aws_cluster_instance` will not update the `engine_version`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customIamInstanceProfile",
        "Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "performanceInsightsEnabled",
        "Specifies whether Performance Insights is enabled or not.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredBackupWindow",
        'Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". **NOTE:** If `preferred_backup_window` is set at the cluster level, this argument **must** be omitted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertIdentifier",
        "Identifier of the CA certificate for the DB instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "monitoringInterval",
        "Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToSnapshot",
        "Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.*` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details. For Aurora Serverless v2 use `db.serverless`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "promotionTier",
        "Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        'Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSubnetGroupName",
        "Specifies the DB subnet group to associate with this DB instance. The default behavior varies depending on whether `db_subnet_group_name` is specified. Please refer to official [AWS documentation](https://docs.aws.amazon.com/cli/latest/reference/rds/create-db-instance.html) to understand how `db_subnet_group_name` and `publicly_accessible` parameters affect DB instance behaviour. **NOTE:** This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "Identifier of the `aws.rds.Cluster` in which to launch this instance.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitoringRoleArn",
        "ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbParameterGroupName",
        "Name of the DB parameter group to associate with this instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "performanceInsightsKmsKeyId",
        "ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "performanceInsightsRetentionPeriod",
        "Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifierPrefix",
        "Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
