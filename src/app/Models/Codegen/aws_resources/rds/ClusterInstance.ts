import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterInstanceArgs {
  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  identifierPrefix?: string;

  // Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.-` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details.
  instanceClass?: string;

  // Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
  monitoringInterval?: number;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.
  promotionTier?: number;

  // Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.
  publiclyAccessible?: boolean;

  // Identifier of the `aws.rds.Cluster` in which to launch this instance.
  clusterIdentifier?: string;

  // Name of the DB parameter group to associate with this instance.
  dbParameterGroupName?: string;

  // Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.
  identifier?: string;

  // Database engine version.
  engineVersion?: string;

  // Specifies whether Performance Insights is enabled or not.
  performanceInsightsEnabled?: boolean;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  performanceInsightsRetentionPeriod?: number;

  // Identifier of the CA certificate for the DB instance.
  caCertIdentifier?: string;

  // Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
  copyTagsToSnapshot?: boolean;

  // DB subnet group to associate with this DB instance. --NOTE:-- This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.
  dbSubnetGroupName?: string;

  // Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". --NOTE:-- If `preferred_backup_window` is set at the cluster level, this argument --must-- be omitted.
  preferredBackupWindow?: string;

  /*
Name of the database engine to be used for the RDS cluster instance.
Valid Values: `aurora-mysql`, `aurora-postgresql`.
*/
  engine?: string;

  // ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
  monitoringRoleArn?: string;

  // ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
  performanceInsightsKmsKeyId?: string;

  // Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  customIamInstanceProfile?: string;

  // Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
  preferredMaintenanceWindow?: string;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.
  applyImmediately?: boolean;

  // Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
  autoMinorVersionUpgrade?: boolean;

  // EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
  availabilityZone?: string;
}
export class ClusterInstance extends Resource {
  // Database port
  public port?: number;

  // Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.
  public publiclyAccessible?: boolean;

  // Specifies whether the DB cluster is encrypted.
  public storageEncrypted?: boolean;

  // Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.
  public applyImmediately?: boolean;

  // Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
  public autoMinorVersionUpgrade?: boolean;

  // Name of the DB parameter group to associate with this instance.
  public dbParameterGroupName?: string;

  // Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". --NOTE:-- If `preferred_backup_window` is set at the cluster level, this argument --must-- be omitted.
  public preferredBackupWindow?: string;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // DB subnet group to associate with this DB instance. --NOTE:-- This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.
  public dbSubnetGroupName?: string;

  // DNS address for this instance. May not be writable
  public endpoint?: string;

  // Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
  public monitoringInterval?: number;

  // Network type of the DB instance.
  public networkType?: string;

  // Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
  public writer?: boolean;

  // Amazon Resource Name (ARN) of cluster instance
  public arn?: string;

  // EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
  public availabilityZone?: string;

  // Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
  public customIamInstanceProfile?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Name of the database engine to be used for the RDS cluster instance.
Valid Values: `aurora-mysql`, `aurora-postgresql`.
*/
  public engine?: string;

  // Database engine version
  public engineVersionActual?: string;

  // Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
  public preferredMaintenanceWindow?: string;

  // Identifier of the CA certificate for the DB instance.
  public caCertIdentifier?: string;

  // Database engine version.
  public engineVersion?: string;

  // Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.
  public identifier?: string;

  // Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.-` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details.
  public instanceClass?: string;

  // ARN for the KMS encryption key if one is set to the cluster.
  public kmsKeyId?: string;

  // Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.
  public performanceInsightsRetentionPeriod?: number;

  // Identifier of the `aws.rds.Cluster` in which to launch this instance.
  public clusterIdentifier?: string;

  // Region-unique, immutable identifier for the DB instance.
  public dbiResourceId?: string;

  // ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
  public monitoringRoleArn?: string;

  // ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
  public performanceInsightsKmsKeyId?: string;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.
  public promotionTier?: number;

  // Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
  public copyTagsToSnapshot?: boolean;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  public identifierPrefix?: string;

  // Specifies whether Performance Insights is enabled or not.
  public performanceInsightsEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "Identifier of the `aws.rds.Cluster` in which to launch this instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "Identifier for the RDS instance, if omitted, Pulumi will assign a random, unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredBackupWindow",
        'Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". **NOTE:** If `preferred_backup_window` is set at the cluster level, this argument **must** be omitted.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customIamInstanceProfile",
        "Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        'Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "performanceInsightsRetentionPeriod",
        "Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSubnetGroupName",
        "DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached `aws.rds.Cluster`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the database engine to be used for the RDS cluster instance.\nValid Values: `aurora-mysql`, `aurora-postgresql`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifierPrefix",
        "Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Database engine version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "performanceInsightsEnabled",
        "Specifies whether Performance Insights is enabled or not.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitoringRoleArn",
        "ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "performanceInsightsKmsKeyId",
        "ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html). Aurora uses `db.*` instance classes/types. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) for currently available instance classes and complete details.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "monitoringInterval",
        "Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "promotionTier",
        "Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) for more details on controlling this property.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbParameterGroupName",
        "Name of the DB parameter group to associate with this instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertIdentifier",
        "Identifier of the CA certificate for the DB instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToSnapshot",
        "Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
