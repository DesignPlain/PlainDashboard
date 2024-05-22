import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterInstanceArgs {
  // The identifier of the certificate authority (CA) certificate for the DB instance.
  caCertIdentifier?: string;

  // The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key.
  performanceInsightsKmsKeyId?: string;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
  promotionTier?: number;

  /*
The instance class to use. For details on CPU and memory, see [Scaling for DocumentDB Instances](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-manage-performance.html#db-cluster-manage-scaling-instance).
DocumentDB currently supports the below instance classes.
Please see [AWS Documentation](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-instance-classes.html#db-instance-class-specs) for complete details.
- db.r6g.large
- db.r6g.xlarge
- db.r6g.2xlarge
- db.r6g.4xlarge
- db.r6g.8xlarge
- db.r6g.12xlarge
- db.r6g.16xlarge
- db.r5.large
- db.r5.xlarge
- db.r5.2xlarge
- db.r5.4xlarge
- db.r5.12xlarge
- db.r5.24xlarge
- db.r4.large
- db.r4.xlarge
- db.r4.2xlarge
- db.r4.4xlarge
- db.r4.8xlarge
- db.r4.16xlarge
- db.t4g.medium
- db.t3.medium
*/
  instanceClass?: string;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
*/
  preferredMaintenanceWindow?: string;

  // A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The identifier of the `aws.docdb.Cluster` in which to launch this instance.
  clusterIdentifier?: string;

  // Copy all DB instance `tags` to snapshots. Default is `false`.
  copyTagsToSnapshot?: boolean;

  // The identifier for the DocumentDB instance, if omitted, the provider will assign a random, unique identifier.
  identifier?: string;

  // This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set (see [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html)). Default `true`.
  autoMinorVersionUpgrade?: boolean;

  // The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_CreateDBInstance.html) about the details.
  availabilityZone?: string;

  // The name of the database engine to be used for the DocumentDB instance. Defaults to `docdb`. Valid Values: `docdb`.
  engine?: string;

  /*
Specifies whether any database modifications
are applied immediately, or during the next maintenance window. Default is`false`.
*/
  applyImmediately?: boolean;

  // A value that indicates whether to enable Performance Insights for the DB Instance. Default `false`. See [docs] (https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html) about the details.
  enablePerformanceInsights?: boolean;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  identifierPrefix?: string;
}
export class ClusterInstance extends Resource {
  // The database port
  public port?: number;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
  public promotionTier?: number;

  // Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
  public writer?: boolean;

  // The region-unique, immutable identifier for the DB instance.
  public dbiResourceId?: string;

  // The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_CreateDBInstance.html) about the details.
  public availabilityZone?: string;

  // A value that indicates whether to enable Performance Insights for the DB Instance. Default `false`. See [docs] (https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html) about the details.
  public enablePerformanceInsights?: boolean;

  // The DNS address for this instance. May not be writable
  public endpoint?: string;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  public identifierPrefix?: string;

  // The database engine version
  public engineVersion?: string;

  /*
The instance class to use. For details on CPU and memory, see [Scaling for DocumentDB Instances](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-manage-performance.html#db-cluster-manage-scaling-instance).
DocumentDB currently supports the below instance classes.
Please see [AWS Documentation](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-instance-classes.html#db-instance-class-specs) for complete details.
- db.r6g.large
- db.r6g.xlarge
- db.r6g.2xlarge
- db.r6g.4xlarge
- db.r6g.8xlarge
- db.r6g.12xlarge
- db.r6g.16xlarge
- db.r5.large
- db.r5.xlarge
- db.r5.2xlarge
- db.r5.4xlarge
- db.r5.12xlarge
- db.r5.24xlarge
- db.r4.large
- db.r4.xlarge
- db.r4.2xlarge
- db.r4.4xlarge
- db.r4.8xlarge
- db.r4.16xlarge
- db.t4g.medium
- db.t3.medium
*/
  public instanceClass?: string;

  // The daily time range during which automated backups are created if automated backups are enabled.
  public preferredBackupWindow?: string;

  // Copy all DB instance `tags` to snapshots. Default is `false`.
  public copyTagsToSnapshot?: boolean;

  // The identifier of the certificate authority (CA) certificate for the DB instance.
  public caCertIdentifier?: string;

  // The identifier of the `aws.docdb.Cluster` in which to launch this instance.
  public clusterIdentifier?: string;

  // This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set (see [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html)). Default `true`.
  public autoMinorVersionUpgrade?: boolean;

  //
  public publiclyAccessible?: boolean;

  // Specifies whether the DB cluster is encrypted.
  public storageEncrypted?: boolean;

  // The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key.
  public performanceInsightsKmsKeyId?: string;

  // Amazon Resource Name (ARN) of cluster instance
  public arn?: string;

  // The DB subnet group to associate with this DB instance.
  public dbSubnetGroupName?: string;

  // The name of the database engine to be used for the DocumentDB instance. Defaults to `docdb`. Valid Values: `docdb`.
  public engine?: string;

  /*
Specifies whether any database modifications
are applied immediately, or during the next maintenance window. Default is`false`.
*/
  public applyImmediately?: boolean;

  // A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN for the KMS encryption key if one is set to the cluster.
  public kmsKeyId?: string;

  // The identifier for the DocumentDB instance, if omitted, the provider will assign a random, unique identifier.
  public identifier?: string;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
*/
  public preferredMaintenanceWindow?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "caCertIdentifier",
        "The identifier of the certificate authority (CA) certificate for the DB instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The identifier of the `aws.docdb.Cluster` in which to launch this instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The name of the database engine to be used for the DocumentDB instance. Defaults to `docdb`. Valid Values: `docdb`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set (see [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html)). Default `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enablePerformanceInsights",
        "A value that indicates whether to enable Performance Insights for the DB Instance. Default `false`. See [docs] (https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html) about the details.",
        [],
        false,
        false,
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
        "performanceInsightsKmsKeyId",
        "The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToSnapshot",
        "Copy all DB instance `tags` to snapshots. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "promotionTier",
        "Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "The identifier for the DocumentDB instance, if omitted, the provider will assign a random, unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any database modifications\nare applied immediately, or during the next maintenance window. Default is`false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "The instance class to use. For details on CPU and memory, see [Scaling for DocumentDB Instances](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-manage-performance.html#db-cluster-manage-scaling-instance).\nDocumentDB currently supports the below instance classes.\nPlease see [AWS Documentation](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-instance-classes.html#db-instance-class-specs) for complete details.\n- db.r6g.large\n- db.r6g.xlarge\n- db.r6g.2xlarge\n- db.r6g.4xlarge\n- db.r6g.8xlarge\n- db.r6g.12xlarge\n- db.r6g.16xlarge\n- db.r5.large\n- db.r5.xlarge\n- db.r5.2xlarge\n- db.r5.4xlarge\n- db.r5.12xlarge\n- db.r5.24xlarge\n- db.r4.large\n- db.r4.xlarge\n- db.r4.2xlarge\n- db.r4.4xlarge\n- db.r4.8xlarge\n- db.r4.16xlarge\n- db.t4g.medium\n- db.t3.medium",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        'The window to perform maintenance in.\nSyntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_CreateDBInstance.html) about the details.",
        [],
        false,
        true,
      ),
    ];
  }
}
