import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatabaseArgs {
  // When true, enables automated backup retention for your database. When false, disables automated backup retention for your database. Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database.
  backupRetentionEnabled?: boolean;

  // The password for the master user of your new database. The password can include any printable ASCII character except "/", """, or "@".
  masterPassword?: string;

  // The master user name for your new database.
  masterUsername?: string;

  // The name to use for your new Lightsail database resource. Names be unique within each AWS Region in your Lightsail account.
  relationalDatabaseName?: string;

  // The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.
  availabilityZone?: string;

  // The bundle ID for your new database. A bundle describes the performance specifications for your database (see list below). You can get a list of database bundle IDs by using the AWS CLI command: `aws lightsail get-relational-database-bundles`.
  bundleId?: string;

  // The name of the database snapshot created if skip final snapshot is false, which is the default value for that parameter.
  finalSnapshotName?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value.
  tags?: Map<string, string>;

  // When true , applies changes immediately. When false , applies changes during the preferred maintenance window. Some changes may cause an outage.
  applyImmediately?: boolean;

  // Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
  publiclyAccessible?: boolean;

  // Determines whether a final database snapshot is created before your database is deleted. If true is specified, no database snapshot is created. If false is specified, a database snapshot is created before your database is deleted. You must specify the final relational database snapshot name parameter if the skip final snapshot parameter is false.
  skipFinalSnapshot?: boolean;

  // The blueprint ID for your new database. A blueprint describes the major engine version of a database. You can get a list of database blueprints IDs by using the AWS CLI command: `aws lightsail get-relational-database-blueprints`
  blueprintId?: string;

  // The name of the master database created when the Lightsail database resource is created.
  masterDatabaseName?: string;

  // The daily time range during which automated backups are created for your new database if automated backups are enabled. Must be in the hh24:mi-hh24:mi format. Example: `16:00-16:30`. Specified in Coordinated Universal Time (UTC).
  preferredBackupWindow?: string;

  // The weekly time range during which system maintenance can occur on your new database. Must be in the ddd:hh24:mi-ddd:hh24:mi format. Specified in Coordinated Universal Time (UTC). Example: `Tue:17:00-Tue:17:30`
  preferredMaintenanceWindow?: string;
}
export class Database extends Resource {
  // The bundle ID for your new database. A bundle describes the performance specifications for your database (see list below). You can get a list of database bundle IDs by using the AWS CLI command: `aws lightsail get-relational-database-bundles`.
  public bundleId?: string;

  // The number of vCPUs for the database.
  public cpuCount?: number;

  // The amount of RAM in GB for the database.
  public ramSize?: number;

  // The name to use for your new Lightsail database resource. Names be unique within each AWS Region in your Lightsail account.
  public relationalDatabaseName?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value.
  public tags?: Map<string, string>;

  // The size of the disk for the database.
  public diskSize?: number;

  // The master endpoint fqdn for the database.
  public masterEndpointAddress?: string;

  // The master user name for your new database.
  public masterUsername?: string;

  // The daily time range during which automated backups are created for your new database if automated backups are enabled. Must be in the hh24:mi-hh24:mi format. Example: `16:00-16:30`. Specified in Coordinated Universal Time (UTC).
  public preferredBackupWindow?: string;

  // The weekly time range during which system maintenance can occur on your new database. Must be in the ddd:hh24:mi-ddd:hh24:mi format. Specified in Coordinated Universal Time (UTC). Example: `Tue:17:00-Tue:17:30`
  public preferredMaintenanceWindow?: string;

  // Determines whether a final database snapshot is created before your database is deleted. If true is specified, no database snapshot is created. If false is specified, a database snapshot is created before your database is deleted. You must specify the final relational database snapshot name parameter if the skip final snapshot parameter is false.
  public skipFinalSnapshot?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // When true , applies changes immediately. When false , applies changes during the preferred maintenance window. Some changes may cause an outage.
  public applyImmediately?: boolean;

  // The ARN of the Lightsail instance (matches `id`).
  public arn?: string;

  // The database software (for example, MySQL).
  public engine?: string;

  // The database engine version (for example, 5.7.23).
  public engineVersion?: string;

  // The name of the master database created when the Lightsail database resource is created.
  public masterDatabaseName?: string;

  // The certificate associated with the database.
  public caCertificateIdentifier?: string;

  // The timestamp when the instance was created.
  public createdAt?: string;

  // The name of the database snapshot created if skip final snapshot is false, which is the default value for that parameter.
  public finalSnapshotName?: string;

  // The master endpoint network port for the database.
  public masterEndpointPort?: number;

  // Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
  public publiclyAccessible?: boolean;

  // The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.
  public supportCode?: string;

  // The password for the master user of your new database. The password can include any printable ASCII character except "/", """, or "@".
  public masterPassword?: string;

  // Describes the secondary Availability Zone of a high availability database. The secondary database is used for failover support of a high availability database.
  public secondaryAvailabilityZone?: string;

  // When true, enables automated backup retention for your database. When false, disables automated backup retention for your database. Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database.
  public backupRetentionEnabled?: boolean;

  // The blueprint ID for your new database. A blueprint describes the major engine version of a database. You can get a list of database blueprints IDs by using the AWS CLI command: `aws lightsail get-relational-database-blueprints`
  public blueprintId?: string;

  // The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.
  public availabilityZone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bundleId",
        "The bundle ID for your new database. A bundle describes the performance specifications for your database (see list below). You can get a list of database bundle IDs by using the AWS CLI command: `aws lightsail get-relational-database-bundles`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "When true , applies changes immediately. When false , applies changes during the preferred maintenance window. Some changes may cause an outage.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "blueprintId",
        "The blueprint ID for your new database. A blueprint describes the major engine version of a database. You can get a list of database blueprints IDs by using the AWS CLI command: `aws lightsail get-relational-database-blueprints`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "backupRetentionEnabled",
        "When true, enables automated backup retention for your database. When false, disables automated backup retention for your database. Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUsername",
        "The master user name for your new database.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "relationalDatabaseName",
        "The name to use for your new Lightsail database resource. Names be unique within each AWS Region in your Lightsail account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalSnapshot",
        "Determines whether a final database snapshot is created before your database is deleted. If true is specified, no database snapshot is created. If false is specified, a database snapshot is created before your database is deleted. You must specify the final relational database snapshot name parameter if the skip final snapshot parameter is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredBackupWindow",
        "The daily time range during which automated backups are created for your new database if automated backups are enabled. Must be in the hh24:mi-hh24:mi format. Example: `16:00-16:30`. Specified in Coordinated Universal Time (UTC).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterPassword",
        'The password for the master user of your new database. The password can include any printable ASCII character except "/", """, or "@".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotName",
        "The name of the database snapshot created if skip final snapshot is false, which is the default value for that parameter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterDatabaseName",
        "The name of the master database created when the Lightsail database resource is created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "The weekly time range during which system maintenance can occur on your new database. Must be in the ddd:hh24:mi-ddd:hh24:mi format. Specified in Coordinated Universal Time (UTC). Example: `Tue:17:00-Tue:17:30`",
        [],
        false,
        false,
      ),
    ];
  }
}
