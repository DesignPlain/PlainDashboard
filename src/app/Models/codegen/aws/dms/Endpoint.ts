import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dms_EndpointKinesisSettings,
  dms_EndpointKinesisSettings_GetTypes,
} from "../types/dms_EndpointKinesisSettings";
import {
  dms_EndpointRedisSettings,
  dms_EndpointRedisSettings_GetTypes,
} from "../types/dms_EndpointRedisSettings";
import {
  dms_EndpointS3Settings,
  dms_EndpointS3Settings_GetTypes,
} from "../types/dms_EndpointS3Settings";
import {
  dms_EndpointMongodbSettings,
  dms_EndpointMongodbSettings_GetTypes,
} from "../types/dms_EndpointMongodbSettings";
import {
  dms_EndpointPostgresSettings,
  dms_EndpointPostgresSettings_GetTypes,
} from "../types/dms_EndpointPostgresSettings";
import {
  dms_EndpointElasticsearchSettings,
  dms_EndpointElasticsearchSettings_GetTypes,
} from "../types/dms_EndpointElasticsearchSettings";
import {
  dms_EndpointKafkaSettings,
  dms_EndpointKafkaSettings_GetTypes,
} from "../types/dms_EndpointKafkaSettings";
import {
  dms_EndpointRedshiftSettings,
  dms_EndpointRedshiftSettings_GetTypes,
} from "../types/dms_EndpointRedshiftSettings";

export interface EndpointArgs {
  // Configuration block for Redshift settings. See below.
  redshiftSettings?: dms_EndpointRedshiftSettings;

  // Host name of the server.
  serverName?: string;

  // ARN used by the service access IAM role for dynamodb endpoints.
  serviceAccessRole?: string;

  // User name to be used to login to the endpoint database.
  username?: string;

  // ARN for the certificate.
  certificateArn?: string;

  // Configuration block for Kinesis settings. See below.
  kinesisSettings?: dms_EndpointKinesisSettings;

  // Port used by the endpoint database.
  port?: number;

  //
  redisSettings?: dms_EndpointRedisSettings;

  // (--Deprecated--, use the `aws.dms.S3Endpoint` resource instead) Configuration block for S3 settings. See below.
  s3Settings?: dms_EndpointS3Settings;

  /*
ARN of the IAM role that specifies AWS DMS as the trusted entity and has the required permissions to access the value in the Secrets Manager secret referred to by `secrets_manager_arn`. The role must allow the `iam:PassRole` action.

> --Note:-- You can specify one of two sets of values for these permissions. You can specify the values for this setting and `secrets_manager_arn`. Or you can specify clear-text values for `username`, `password` , `server_name`, and `port`. You can't specify both.
*/
  secretsManagerAccessRoleArn?: string;

  // Full ARN, partial ARN, or friendly name of the Secrets Manager secret that contains the endpoint connection details. Supported only when `engine_name` is `aurora`, `aurora-postgresql`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, or `sqlserver`.
  secretsManagerArn?: string;

  /*
ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. To encrypt an S3 target with a KMS Key, use the parameter `s3_settings.server_side_encryption_kms_key_id`. When `engine_name` is `redshift`, `kms_key_arn` is the KMS Key for the Redshift target and the parameter `redshift_settings.server_side_encryption_kms_key_id` encrypts the S3 intermediate storage.

The following arguments are optional:
*/
  kmsKeyArn?: string;

  //
  pauseReplicationTasks?: boolean;

  // Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.
  endpointId?: string;

  // Type of engine for the endpoint. Valid values are `aurora`, `aurora-postgresql`, `azuredb`, `azure-sql-managed-instance`, `babelfish`, `db2`, `db2-zos`, `docdb`, `dynamodb`, `elasticsearch`, `kafka`, `kinesis`, `mariadb`, `mongodb`, `mysql`, `opensearch`, `oracle`, `postgres`, `redshift`, `s3`, `sqlserver`, `sybase`. Please note that some of engine names are available only for `target` endpoint type (e.g. `redshift`).
  engineName?: string;

  // Configuration block for MongoDB settings. See below.
  mongodbSettings?: dms_EndpointMongodbSettings;

  // Password to be used to login to the endpoint database.
  password?: string;

  // Configuration block for Postgres settings. See below.
  postgresSettings?: dms_EndpointPostgresSettings;

  // Name of the endpoint database.
  databaseName?: string;

  // Configuration block for OpenSearch settings. See below.
  elasticsearchSettings?: dms_EndpointElasticsearchSettings;

  // Configuration block for Kafka settings. See below.
  kafkaSettings?: dms_EndpointKafkaSettings;

  // SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`
  sslMode?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Type of endpoint. Valid values are `source`, `target`.
  endpointType?: string;

  // Additional attributes associated with the connection. For available attributes for a `source` Endpoint, see [Sources for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html). For available attributes for a `target` Endpoint, see [Targets for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html).
  extraConnectionAttributes?: string;
}
export class Endpoint extends DS_Resource {
  // SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`
  public sslMode?: string;

  // Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.
  public endpointId?: string;

  // Configuration block for OpenSearch settings. See below.
  public elasticsearchSettings?: dms_EndpointElasticsearchSettings;

  // Type of endpoint. Valid values are `source`, `target`.
  public endpointType?: string;

  // Additional attributes associated with the connection. For available attributes for a `source` Endpoint, see [Sources for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html). For available attributes for a `target` Endpoint, see [Targets for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html).
  public extraConnectionAttributes?: string;

  // Port used by the endpoint database.
  public port?: number;

  // ARN used by the service access IAM role for dynamodb endpoints.
  public serviceAccessRole?: string;

  // Name of the endpoint database.
  public databaseName?: string;

  // Configuration block for Kafka settings. See below.
  public kafkaSettings?: dms_EndpointKafkaSettings;

  //
  public pauseReplicationTasks?: boolean;

  // Configuration block for Postgres settings. See below.
  public postgresSettings?: dms_EndpointPostgresSettings;

  // Configuration block for Redshift settings. See below.
  public redshiftSettings?: dms_EndpointRedshiftSettings;

  // (--Deprecated--, use the `aws.dms.S3Endpoint` resource instead) Configuration block for S3 settings. See below.
  public s3Settings?: dms_EndpointS3Settings;

  // Password to be used to login to the endpoint database.
  public password?: string;

  // Configuration block for Kinesis settings. See below.
  public kinesisSettings?: dms_EndpointKinesisSettings;

  /*
ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. To encrypt an S3 target with a KMS Key, use the parameter `s3_settings.server_side_encryption_kms_key_id`. When `engine_name` is `redshift`, `kms_key_arn` is the KMS Key for the Redshift target and the parameter `redshift_settings.server_side_encryption_kms_key_id` encrypts the S3 intermediate storage.

The following arguments are optional:
*/
  public kmsKeyArn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public redisSettings?: dms_EndpointRedisSettings;

  // Type of engine for the endpoint. Valid values are `aurora`, `aurora-postgresql`, `azuredb`, `azure-sql-managed-instance`, `babelfish`, `db2`, `db2-zos`, `docdb`, `dynamodb`, `elasticsearch`, `kafka`, `kinesis`, `mariadb`, `mongodb`, `mysql`, `opensearch`, `oracle`, `postgres`, `redshift`, `s3`, `sqlserver`, `sybase`. Please note that some of engine names are available only for `target` endpoint type (e.g. `redshift`).
  public engineName?: string;

  // Full ARN, partial ARN, or friendly name of the Secrets Manager secret that contains the endpoint connection details. Supported only when `engine_name` is `aurora`, `aurora-postgresql`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, or `sqlserver`.
  public secretsManagerArn?: string;

  // ARN for the certificate.
  public certificateArn?: string;

  // Configuration block for MongoDB settings. See below.
  public mongodbSettings?: dms_EndpointMongodbSettings;

  /*
ARN of the IAM role that specifies AWS DMS as the trusted entity and has the required permissions to access the value in the Secrets Manager secret referred to by `secrets_manager_arn`. The role must allow the `iam:PassRole` action.

> --Note:-- You can specify one of two sets of values for these permissions. You can specify the values for this setting and `secrets_manager_arn`. Or you can specify clear-text values for `username`, `password` , `server_name`, and `port`. You can't specify both.
*/
  public secretsManagerAccessRoleArn?: string;

  // Host name of the server.
  public serverName?: string;

  // User name to be used to login to the endpoint database.
  public username?: string;

  // ARN for the endpoint.
  public endpointArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "pauseReplicationTasks",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "postgresSettings",
        "Configuration block for Postgres settings. See below.",
        () => dms_EndpointPostgresSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name of the endpoint database.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "elasticsearchSettings",
        "Configuration block for OpenSearch settings. See below.",
        () => dms_EndpointElasticsearchSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccessRole",
        "ARN used by the service access IAM role for dynamodb endpoints.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "ARN for the certificate.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port used by the endpoint database.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "secretsManagerArn",
        "Full ARN, partial ARN, or friendly name of the Secrets Manager secret that contains the endpoint connection details. Supported only when `engine_name` is `aurora`, `aurora-postgresql`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, or `sqlserver`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kafkaSettings",
        "Configuration block for Kafka settings. See below.",
        () => dms_EndpointKafkaSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointType",
        "Type of endpoint. Valid values are `source`, `target`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "extraConnectionAttributes",
        "Additional attributes associated with the connection. For available attributes for a `source` Endpoint, see [Sources for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html). For available attributes for a `target` Endpoint, see [Targets for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "User name to be used to login to the endpoint database.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Settings",
        "(**Deprecated**, use the `aws.dms.S3Endpoint` resource instead) Configuration block for S3 settings. See below.",
        () => dms_EndpointS3Settings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineName",
        "Type of engine for the endpoint. Valid values are `aurora`, `aurora-postgresql`, `azuredb`, `azure-sql-managed-instance`, `babelfish`, `db2`, `db2-zos`, `docdb`, `dynamodb`, `elasticsearch`, `kafka`, `kinesis`, `mariadb`, `mongodb`, `mysql`, `opensearch`, `oracle`, `postgres`, `redshift`, `s3`, `sqlserver`, `sybase`. Please note that some of engine names are available only for `target` endpoint type (e.g. `redshift`).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sslMode",
        "SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. To encrypt an S3 target with a KMS Key, use the parameter `s3_settings.server_side_encryption_kms_key_id`. When `engine_name` is `redshift`, `kms_key_arn` is the KMS Key for the Redshift target and the parameter `redshift_settings.server_side_encryption_kms_key_id` encrypts the S3 intermediate storage.\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointId",
        "Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mongodbSettings",
        "Configuration block for MongoDB settings. See below.",
        () => dms_EndpointMongodbSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "Password to be used to login to the endpoint database.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "redshiftSettings",
        "Configuration block for Redshift settings. See below.",
        () => dms_EndpointRedshiftSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverName",
        "Host name of the server.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "redisSettings",
        "",
        () => dms_EndpointRedisSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "secretsManagerAccessRoleArn",
        "ARN of the IAM role that specifies AWS DMS as the trusted entity and has the required permissions to access the value in the Secrets Manager secret referred to by `secrets_manager_arn`. The role must allow the `iam:PassRole` action.\n\n> **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `secrets_manager_arn`. Or you can specify clear-text values for `username`, `password` , `server_name`, and `port`. You can't specify both.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kinesisSettings",
        "Configuration block for Kinesis settings. See below.",
        () => dms_EndpointKinesisSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
