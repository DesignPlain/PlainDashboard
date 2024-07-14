import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mq_BrokerConfiguration,
  mq_BrokerConfiguration_GetTypes,
} from "../types/mq_BrokerConfiguration";
import {
  mq_BrokerMaintenanceWindowStartTime,
  mq_BrokerMaintenanceWindowStartTime_GetTypes,
} from "../types/mq_BrokerMaintenanceWindowStartTime";
import { mq_BrokerUser, mq_BrokerUser_GetTypes } from "../types/mq_BrokerUser";
import { mq_BrokerLogs, mq_BrokerLogs_GetTypes } from "../types/mq_BrokerLogs";
import {
  mq_BrokerEncryptionOptions,
  mq_BrokerEncryptionOptions_GetTypes,
} from "../types/mq_BrokerEncryptionOptions";
import {
  mq_BrokerLdapServerMetadata,
  mq_BrokerLdapServerMetadata_GetTypes,
} from "../types/mq_BrokerLdapServerMetadata";
import {
  mq_BrokerInstance,
  mq_BrokerInstance_GetTypes,
} from "../types/mq_BrokerInstance";

export interface BrokerArgs {
  // Whether to automatically upgrade to new minor versions of brokers as Amazon MQ makes releases available.
  autoMinorVersionUpgrade?: boolean;

  // Configuration block for broker configuration. Applies to `engine_type` of `ActiveMQ` and `RabbitMQ` only. Detailed below.
  configuration?: mq_BrokerConfiguration;

  // Deployment mode of the broker. Valid values are `SINGLE_INSTANCE`, `ACTIVE_STANDBY_MULTI_AZ`, and `CLUSTER_MULTI_AZ`. Default is `SINGLE_INSTANCE`.
  deploymentMode?: string;

  // Broker's instance type. For example, `mq.t3.micro`, `mq.m5.large`.
  hostInstanceType?: string;

  // Authentication strategy used to secure the broker. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.
  authenticationStrategy?: string;

  // Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.
  engineType?: string;

  // Configuration block for the maintenance window start time. Detailed below.
  maintenanceWindowStartTime?: mq_BrokerMaintenanceWindowStartTime;

  // List of subnet IDs in which to launch the broker. A `SINGLE_INSTANCE` deployment requires one subnet. An `ACTIVE_STANDBY_MULTI_AZ` deployment requires multiple subnets.
  subnetIds?: Array<string>;

  /*
Configuration block for broker users. For `engine_type` of `RabbitMQ`, Amazon MQ does not return broker users preventing this resource from making user updates and drift detection. Detailed below.

The following arguments are optional:
*/
  users?: Array<mq_BrokerUser>;

  // Specifies whether any broker modifications are applied immediately, or during the next maintenance window. Default is `false`.
  applyImmediately?: boolean;

  // Name of the broker.
  brokerName?: string;

  // Defines whether this broker is a part of a data replication pair. Valid values are `CRDR` and `NONE`.
  dataReplicationMode?: string;

  // Version of the broker engine. See the [AmazonMQ Broker Engine docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) for supported versions. For example, `5.17.6`.
  engineVersion?: string;

  // Configuration block for the logging configuration of the broker. Detailed below.
  logs?: mq_BrokerLogs;

  // Storage type of the broker. For `engine_type` `ActiveMQ`, the valid values are `efs` and `ebs`, and the AWS-default is `efs`. For `engine_type` `RabbitMQ`, only `ebs` is supported. When using `ebs`, only the `mq.m5` broker instance type family is supported.
  storageType?: string;

  // Map of tags to assign to the broker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when `data_replication_mode` is `CRDR`.
  dataReplicationPrimaryBrokerArn?: string;

  // Configuration block containing encryption options. Detailed below.
  encryptionOptions?: mq_BrokerEncryptionOptions;

  // Configuration block for the LDAP server used to authenticate and authorize connections to the broker. Not supported for `engine_type` `RabbitMQ`. Detailed below. (Currently, AWS may not process changes to LDAP server metadata.)
  ldapServerMetadata?: mq_BrokerLdapServerMetadata;

  // Whether to enable connections from applications outside of the VPC that hosts the broker's subnets.
  publiclyAccessible?: boolean;

  // List of security group IDs assigned to the broker.
  securityGroups?: Array<string>;
}
export class Broker extends Resource {
  /*
List of information about allocated brokers (both active & standby).
- `instances.0.console_url` - The URL of the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) or the [RabbitMQ Management UI](https://www.rabbitmq.com/management.html#external-monitoring) depending on `engine_type`.
- `instances.0.ip_address` - IP Address of the broker.
- `instances.0.endpoints` - Broker's wire-level protocol endpoints in the following order & format referenceable e.g., as `instances.0.endpoints.0` (SSL):
- For `ActiveMQ`:
- `ssl://broker-id.mq.us-west-2.amazonaws.com:61617`
- `amqp+ssl://broker-id.mq.us-west-2.amazonaws.com:5671`
- `stomp+ssl://broker-id.mq.us-west-2.amazonaws.com:61614`
- `mqtt+ssl://broker-id.mq.us-west-2.amazonaws.com:8883`
- `wss://broker-id.mq.us-west-2.amazonaws.com:61619`
- For `RabbitMQ`:
- `amqps://broker-id.mq.us-west-2.amazonaws.com:5671`
*/
  public instances?: Array<mq_BrokerInstance>;

  // (Optional) The data replication mode that will be applied after reboot.
  public pendingDataReplicationMode?: string;

  // List of security group IDs assigned to the broker.
  public securityGroups?: Array<string>;

  // Storage type of the broker. For `engine_type` `ActiveMQ`, the valid values are `efs` and `ebs`, and the AWS-default is `efs`. For `engine_type` `RabbitMQ`, only `ebs` is supported. When using `ebs`, only the `mq.m5` broker instance type family is supported.
  public storageType?: string;

  // List of subnet IDs in which to launch the broker. A `SINGLE_INSTANCE` deployment requires one subnet. An `ACTIVE_STANDBY_MULTI_AZ` deployment requires multiple subnets.
  public subnetIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Authentication strategy used to secure the broker. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.
  public authenticationStrategy?: string;

  // Configuration block for broker configuration. Applies to `engine_type` of `ActiveMQ` and `RabbitMQ` only. Detailed below.
  public configuration?: mq_BrokerConfiguration;

  // The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when `data_replication_mode` is `CRDR`.
  public dataReplicationPrimaryBrokerArn?: string;

  // Configuration block containing encryption options. Detailed below.
  public encryptionOptions?: mq_BrokerEncryptionOptions;

  // Configuration block for the LDAP server used to authenticate and authorize connections to the broker. Not supported for `engine_type` `RabbitMQ`. Detailed below. (Currently, AWS may not process changes to LDAP server metadata.)
  public ldapServerMetadata?: mq_BrokerLdapServerMetadata;

  // Configuration block for the maintenance window start time. Detailed below.
  public maintenanceWindowStartTime?: mq_BrokerMaintenanceWindowStartTime;

  // Map of tags to assign to the broker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Configuration block for broker users. For `engine_type` of `RabbitMQ`, Amazon MQ does not return broker users preventing this resource from making user updates and drift detection. Detailed below.

The following arguments are optional:
*/
  public users?: Array<mq_BrokerUser>;

  // Specifies whether any broker modifications are applied immediately, or during the next maintenance window. Default is `false`.
  public applyImmediately?: boolean;

  // Name of the broker.
  public brokerName?: string;

  // Defines whether this broker is a part of a data replication pair. Valid values are `CRDR` and `NONE`.
  public dataReplicationMode?: string;

  // Deployment mode of the broker. Valid values are `SINGLE_INSTANCE`, `ACTIVE_STANDBY_MULTI_AZ`, and `CLUSTER_MULTI_AZ`. Default is `SINGLE_INSTANCE`.
  public deploymentMode?: string;

  // Version of the broker engine. See the [AmazonMQ Broker Engine docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) for supported versions. For example, `5.17.6`.
  public engineVersion?: string;

  // Broker's instance type. For example, `mq.t3.micro`, `mq.m5.large`.
  public hostInstanceType?: string;

  // ARN of the broker.
  public arn?: string;

  // Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.
  public engineType?: string;

  // Configuration block for the logging configuration of the broker. Detailed below.
  public logs?: mq_BrokerLogs;

  // Whether to enable connections from applications outside of the VPC that hosts the broker's subnets.
  public publiclyAccessible?: boolean;

  // Whether to automatically upgrade to new minor versions of brokers as Amazon MQ makes releases available.
  public autoMinorVersionUpgrade?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "Configuration block for broker configuration. Applies to `engine_type` of `ActiveMQ` and `RabbitMQ` only. Detailed below.",
        mq_BrokerConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostInstanceType",
        "Broker's instance type. For example, `mq.t3.micro`, `mq.m5.large`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationStrategy",
        "Authentication strategy used to secure the broker. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataReplicationMode",
        "Defines whether this broker is a part of a data replication pair. Valid values are `CRDR` and `NONE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logs",
        "Configuration block for the logging configuration of the broker. Detailed below.",
        mq_BrokerLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataReplicationPrimaryBrokerArn",
        "The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when `data_replication_mode` is `CRDR`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionOptions",
        "Configuration block containing encryption options. Detailed below.",
        mq_BrokerEncryptionOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "Whether to automatically upgrade to new minor versions of brokers as Amazon MQ makes releases available.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineType",
        "Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Version of the broker engine. See the [AmazonMQ Broker Engine docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) for supported versions. For example, `5.17.6`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceWindowStartTime",
        "Configuration block for the maintenance window start time. Detailed below.",
        mq_BrokerMaintenanceWindowStartTime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "users",
        "Configuration block for broker users. For `engine_type` of `RabbitMQ`, Amazon MQ does not return broker users preventing this resource from making user updates and drift detection. Detailed below.\n\nThe following arguments are optional:",
        mq_BrokerUser_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any broker modifications are applied immediately, or during the next maintenance window. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ldapServerMetadata",
        "Configuration block for the LDAP server used to authenticate and authorize connections to the broker. Not supported for `engine_type` `RabbitMQ`. Detailed below. (Currently, AWS may not process changes to LDAP server metadata.)",
        mq_BrokerLdapServerMetadata_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Whether to enable connections from applications outside of the VPC that hosts the broker's subnets.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "List of security group IDs assigned to the broker.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deploymentMode",
        "Deployment mode of the broker. Valid values are `SINGLE_INSTANCE`, `ACTIVE_STANDBY_MULTI_AZ`, and `CLUSTER_MULTI_AZ`. Default is `SINGLE_INSTANCE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "List of subnet IDs in which to launch the broker. A `SINGLE_INSTANCE` deployment requires one subnet. An `ACTIVE_STANDBY_MULTI_AZ` deployment requires multiple subnets.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "brokerName",
        "Name of the broker.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        "Storage type of the broker. For `engine_type` `ActiveMQ`, the valid values are `efs` and `ebs`, and the AWS-default is `efs`. For `engine_type` `RabbitMQ`, only `ebs` is supported. When using `ebs`, only the `mq.m5` broker instance type family is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the broker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
