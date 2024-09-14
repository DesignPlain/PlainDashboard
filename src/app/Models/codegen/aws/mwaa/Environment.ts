import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mwaa_EnvironmentNetworkConfiguration,
  mwaa_EnvironmentNetworkConfiguration_GetTypes,
} from "../types/mwaa_EnvironmentNetworkConfiguration";
import {
  mwaa_EnvironmentLoggingConfiguration,
  mwaa_EnvironmentLoggingConfiguration_GetTypes,
} from "../types/mwaa_EnvironmentLoggingConfiguration";
import {
  mwaa_EnvironmentLastUpdated,
  mwaa_EnvironmentLastUpdated_GetTypes,
} from "../types/mwaa_EnvironmentLastUpdated";

export interface EnvironmentArgs {
  // The plugins.zip file version you want to use.
  pluginsS3ObjectVersion?: string;

  // The number of schedulers that you want to run in your environment. v2.0.2 and above accepts `2` - `5`, default `2`. v1.10.12 accepts `1`.
  schedulers?: number;

  // The version of the startup shell script you want to use. You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
  startupScriptS3ObjectVersion?: string;

  // The relative path to the script hosted in your bucket. The script runs as your environment starts before starting the Apache Airflow process. Use this script to install dependencies, modify configuration options, and set environment variables. See [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html). Supported for environment versions 2.x and later.
  startupScriptS3Path?: string;

  // Specifies the start date for the weekly maintenance window.
  weeklyMaintenanceWindowStart?: string;

  // The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  dagS3Path?: string;

  // Specifies the network configuration for your Apache Airflow Environment. This includes two private subnets as well as security groups for the Airflow environment. Each subnet requires internet connection, otherwise the deployment will fail. See `network_configuration` Block for details.
  networkConfiguration?: mwaa_EnvironmentNetworkConfiguration;

  // The minimum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.
  minWebservers?: number;

  // Specifies whether the webserver should be accessible over the internet or via your specified VPC. Possible options: `PRIVATE_ONLY` (default) and `PUBLIC_ONLY`.
  webserverAccessMode?: string;

  // Airflow version of your environment, will be set by default to the latest version that MWAA supports.
  airflowVersion?: string;

  // Environment class for the cluster. Possible options are `mw1.small`, `mw1.medium`, `mw1.large`. Will be set by default to `mw1.small`. Please check the [AWS Pricing](https://aws.amazon.com/de/managed-workflows-for-apache-airflow/pricing/) for more information about the environment classes.
  environmentClass?: string;

  // The Amazon Resource Name (ARN) of your KMS key that you want to use for encryption. Will be set to the ARN of the managed KMS key `aws/airflow` by default. Please check the [Official Documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/custom-keys-certs.html) for more information.
  kmsKey?: string;

  // The Apache Airflow logs you want to send to Amazon CloudWatch Logs. See `logging_configuration` Block for details.
  loggingConfiguration?: mwaa_EnvironmentLoggingConfiguration;

  // The maximum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.
  maxWebservers?: number;

  // The maximum number of workers that can be automatically scaled up. Value need to be between `1` and `25`. Will be `10` by default.
  maxWorkers?: number;

  // The name of the Apache Airflow Environment
  name?: string;

  // The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then plugins_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  pluginsS3Path?: string;

  // The `airflow_configuration_options` parameter specifies airflow override options. Check the [Official documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-reference) for all possible configuration options.
  airflowConfigurationOptions?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the task execution role that the Amazon MWAA and its environment can assume. Check the [official AWS documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html) for the detailed role specification.
  executionRoleArn?: string;

  // The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then requirements_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  requirementsS3Path?: string;

  // The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.
  sourceBucketArn?: string;

  // The requirements.txt file version you want to use.
  requirementsS3ObjectVersion?: string;

  // A map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Defines whether the VPC endpoints configured for the environment are created and managed by the customer or by AWS. If set to `SERVICE`, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER`, you must create, and manage, the VPC endpoints for your VPC. Defaults to `SERVICE` if not set.
  endpointManagement?: string;

  // The minimum number of workers that you want to run in your environment. Will be `1` by default.
  minWorkers?: number;
}
export class Environment extends DS_Resource {
  // The name of the Apache Airflow Environment
  public name?: string;

  // The number of schedulers that you want to run in your environment. v2.0.2 and above accepts `2` - `5`, default `2`. v1.10.12 accepts `1`.
  public schedulers?: number;

  // The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.
  public sourceBucketArn?: string;

  // The relative path to the script hosted in your bucket. The script runs as your environment starts before starting the Apache Airflow process. Use this script to install dependencies, modify configuration options, and set environment variables. See [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html). Supported for environment versions 2.x and later.
  public startupScriptS3Path?: string;

  // The webserver URL of the MWAA Environment
  public webserverUrl?: string;

  /*
The VPC endpoint for the environment's Amazon RDS database
- `logging_configuration[0].<LOG_CONFIGURATION_TYPE>[0].cloud_watch_log_group_arn` - Provides the ARN for the CloudWatch group where the logs will be published
*/
  public databaseVpcEndpointService?: string;

  // Environment class for the cluster. Possible options are `mw1.small`, `mw1.medium`, `mw1.large`. Will be set by default to `mw1.small`. Please check the [AWS Pricing](https://aws.amazon.com/de/managed-workflows-for-apache-airflow/pricing/) for more information about the environment classes.
  public environmentClass?: string;

  // The Amazon Resource Name (ARN) of your KMS key that you want to use for encryption. Will be set to the ARN of the managed KMS key `aws/airflow` by default. Please check the [Official Documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/custom-keys-certs.html) for more information.
  public kmsKey?: string;

  // The version of the startup shell script you want to use. You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
  public startupScriptS3ObjectVersion?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC endpoint for the environment's web server
  public webserverVpcEndpointService?: string;

  // The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  public dagS3Path?: string;

  //
  public lastUpdateds?: Array<mwaa_EnvironmentLastUpdated>;

  // The plugins.zip file version you want to use.
  public pluginsS3ObjectVersion?: string;

  // Airflow version of your environment, will be set by default to the latest version that MWAA supports.
  public airflowVersion?: string;

  // The maximum number of workers that can be automatically scaled up. Value need to be between `1` and `25`. Will be `10` by default.
  public maxWorkers?: number;

  // The minimum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.
  public minWebservers?: number;

  // The Created At date of the MWAA Environment
  public createdAt?: string;

  // The Amazon Resource Name (ARN) of the task execution role that the Amazon MWAA and its environment can assume. Check the [official AWS documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html) for the detailed role specification.
  public executionRoleArn?: string;

  // A map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The status of the Amazon MWAA Environment
  public status?: string;

  // Specifies whether the webserver should be accessible over the internet or via your specified VPC. Possible options: `PRIVATE_ONLY` (default) and `PUBLIC_ONLY`.
  public webserverAccessMode?: string;

  // Defines whether the VPC endpoints configured for the environment are created and managed by the customer or by AWS. If set to `SERVICE`, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER`, you must create, and manage, the VPC endpoints for your VPC. Defaults to `SERVICE` if not set.
  public endpointManagement?: string;

  // The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then plugins_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  public pluginsS3Path?: string;

  // The requirements.txt file version you want to use.
  public requirementsS3ObjectVersion?: string;

  // The ARN of the MWAA Environment
  public arn?: string;

  // The Apache Airflow logs you want to send to Amazon CloudWatch Logs. See `logging_configuration` Block for details.
  public loggingConfiguration?: mwaa_EnvironmentLoggingConfiguration;

  // The maximum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.
  public maxWebservers?: number;

  // Specifies the start date for the weekly maintenance window.
  public weeklyMaintenanceWindowStart?: string;

  // Specifies the network configuration for your Apache Airflow Environment. This includes two private subnets as well as security groups for the Airflow environment. Each subnet requires internet connection, otherwise the deployment will fail. See `network_configuration` Block for details.
  public networkConfiguration?: mwaa_EnvironmentNetworkConfiguration;

  // The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then requirements_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).
  public requirementsS3Path?: string;

  // The Service Role ARN of the Amazon MWAA Environment
  public serviceRoleArn?: string;

  // The `airflow_configuration_options` parameter specifies airflow override options. Check the [Official documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-reference) for all possible configuration options.
  public airflowConfigurationOptions?: Map<string, string>;

  // The minimum number of workers that you want to run in your environment. Will be `1` by default.
  public minWorkers?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "weeklyMaintenanceWindowStart",
        "Specifies the start date for the weekly maintenance window.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dagS3Path",
        "The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentClass",
        "Environment class for the cluster. Possible options are `mw1.small`, `mw1.medium`, `mw1.large`. Will be set by default to `mw1.small`. Please check the [AWS Pricing](https://aws.amazon.com/de/managed-workflows-for-apache-airflow/pricing/) for more information about the environment classes.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKey",
        "The Amazon Resource Name (ARN) of your KMS key that you want to use for encryption. Will be set to the ARN of the managed KMS key `aws/airflow` by default. Please check the [Official Documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/custom-keys-certs.html) for more information.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfiguration",
        "Specifies the network configuration for your Apache Airflow Environment. This includes two private subnets as well as security groups for the Airflow environment. Each subnet requires internet connection, otherwise the deployment will fail. See `network_configuration` Block for details.",
        () => mwaa_EnvironmentNetworkConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "airflowVersion",
        "Airflow version of your environment, will be set by default to the latest version that MWAA supports.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxWebservers",
        "The maximum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxWorkers",
        "The maximum number of workers that can be automatically scaled up. Value need to be between `1` and `25`. Will be `10` by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRoleArn",
        "The Amazon Resource Name (ARN) of the task execution role that the Amazon MWAA and its environment can assume. Check the [official AWS documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html) for the detailed role specification.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requirementsS3Path",
        "The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then requirements_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pluginsS3ObjectVersion",
        "The plugins.zip file version you want to use.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startupScriptS3Path",
        "The relative path to the script hosted in your bucket. The script runs as your environment starts before starting the Apache Airflow process. Use this script to install dependencies, modify configuration options, and set environment variables. See [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html). Supported for environment versions 2.x and later.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfiguration",
        "The Apache Airflow logs you want to send to Amazon CloudWatch Logs. See `logging_configuration` Block for details.",
        () => mwaa_EnvironmentLoggingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Apache Airflow Environment",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "airflowConfigurationOptions",
        "The `airflow_configuration_options` parameter specifies airflow override options. Check the [Official documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-reference) for all possible configuration options.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointManagement",
        "Defines whether the VPC endpoints configured for the environment are created and managed by the customer or by AWS. If set to `SERVICE`, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER`, you must create, and manage, the VPC endpoints for your VPC. Defaults to `SERVICE` if not set.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "requirementsS3ObjectVersion",
        "The requirements.txt file version you want to use.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minWorkers",
        "The minimum number of workers that you want to run in your environment. Will be `1` by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "schedulers",
        "The number of schedulers that you want to run in your environment. v2.0.2 and above accepts `2` - `5`, default `2`. v1.10.12 accepts `1`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startupScriptS3ObjectVersion",
        "The version of the startup shell script you want to use. You must specify the version ID that Amazon S3 assigns to the file every time you update the script.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minWebservers",
        "The minimum number of web servers that you want to run in your environment. Value need to be between `2` and `5`. Will be `2` by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "webserverAccessMode",
        "Specifies whether the webserver should be accessible over the internet or via your specified VPC. Possible options: `PRIVATE_ONLY` (default) and `PUBLIC_ONLY`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pluginsS3Path",
        "The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then plugins_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceBucketArn",
        "The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
