import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mskconnect_ConnectorKafkaClusterClientAuthentication,
  mskconnect_ConnectorKafkaClusterClientAuthentication_GetTypes,
} from '../types/mskconnect_ConnectorKafkaClusterClientAuthentication';
import {
  mskconnect_ConnectorKafkaCluster,
  mskconnect_ConnectorKafkaCluster_GetTypes,
} from '../types/mskconnect_ConnectorKafkaCluster';
import {
  mskconnect_ConnectorKafkaClusterEncryptionInTransit,
  mskconnect_ConnectorKafkaClusterEncryptionInTransit_GetTypes,
} from '../types/mskconnect_ConnectorKafkaClusterEncryptionInTransit';
import {
  mskconnect_ConnectorLogDelivery,
  mskconnect_ConnectorLogDelivery_GetTypes,
} from '../types/mskconnect_ConnectorLogDelivery';
import {
  mskconnect_ConnectorCapacity,
  mskconnect_ConnectorCapacity_GetTypes,
} from '../types/mskconnect_ConnectorCapacity';
import {
  mskconnect_ConnectorWorkerConfiguration,
  mskconnect_ConnectorWorkerConfiguration_GetTypes,
} from '../types/mskconnect_ConnectorWorkerConfiguration';
import {
  mskconnect_ConnectorPlugin,
  mskconnect_ConnectorPlugin_GetTypes,
} from '../types/mskconnect_ConnectorPlugin';

export interface ConnectorArgs {
  /*
The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.

The following arguments are optional:
*/
  serviceExecutionRoleArn?: string;

  // Details of the client authentication used by the Apache Kafka cluster. See `kafka_cluster_client_authentication` Block for details.
  kafkaClusterClientAuthentication?: mskconnect_ConnectorKafkaClusterClientAuthentication;

  // A map of keys to values that represent the configuration for the connector.
  connectorConfiguration?: Map<string, string>;

  // A summary description of the connector.
  description?: string;

  // Specifies which Apache Kafka cluster to connect to. See `kafka_cluster` Block for details.
  kafkaCluster?: mskconnect_ConnectorKafkaCluster;

  // Details of encryption in transit to the Apache Kafka cluster. See `kafka_cluster_encryption_in_transit` Block for details.
  kafkaClusterEncryptionInTransit?: mskconnect_ConnectorKafkaClusterEncryptionInTransit;

  // The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
  kafkaconnectVersion?: string;

  // Details about log delivery. See `log_delivery` Block for details.
  logDelivery?: mskconnect_ConnectorLogDelivery;

  // The name of the connector.
  name?: string;

  // Information about the capacity allocated to the connector. See `capacity` Block for details.
  capacity?: mskconnect_ConnectorCapacity;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies which worker configuration to use with the connector. See `worker_configuration` Block for details.
  workerConfiguration?: mskconnect_ConnectorWorkerConfiguration;

  // Specifies which plugins to use for the connector. See `plugin` Block for details.
  plugins?: Array<mskconnect_ConnectorPlugin>;
}
export class Connector extends DS_Resource {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A summary description of the connector.
  public description?: string;

  // Specifies which Apache Kafka cluster to connect to. See `kafka_cluster` Block for details.
  public kafkaCluster?: mskconnect_ConnectorKafkaCluster;

  // Details of the client authentication used by the Apache Kafka cluster. See `kafka_cluster_client_authentication` Block for details.
  public kafkaClusterClientAuthentication?: mskconnect_ConnectorKafkaClusterClientAuthentication;

  // The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
  public kafkaconnectVersion?: string;

  // Details of encryption in transit to the Apache Kafka cluster. See `kafka_cluster_encryption_in_transit` Block for details.
  public kafkaClusterEncryptionInTransit?: mskconnect_ConnectorKafkaClusterEncryptionInTransit;

  // Specifies which worker configuration to use with the connector. See `worker_configuration` Block for details.
  public workerConfiguration?: mskconnect_ConnectorWorkerConfiguration;

  // A map of keys to values that represent the configuration for the connector.
  public connectorConfiguration?: Map<string, string>;

  // The name of the connector.
  public name?: string;

  /*
The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.

The following arguments are optional:
*/
  public serviceExecutionRoleArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The current version of the connector.
  public version?: string;

  // The Amazon Resource Name (ARN) of the connector.
  public arn?: string;

  // Information about the capacity allocated to the connector. See `capacity` Block for details.
  public capacity?: mskconnect_ConnectorCapacity;

  // Details about log delivery. See `log_delivery` Block for details.
  public logDelivery?: mskconnect_ConnectorLogDelivery;

  // Specifies which plugins to use for the connector. See `plugin` Block for details.
  public plugins?: Array<mskconnect_ConnectorPlugin>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'serviceExecutionRoleArn',
        'The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'connectorConfiguration',
        'A map of keys to values that represent the configuration for the connector.',
        () => InputType_Map_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the connector.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'plugins',
        'Specifies which plugins to use for the connector. See `plugin` Block for details.',
        () => mskconnect_ConnectorPlugin_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kafkaClusterClientAuthentication',
        'Details of the client authentication used by the Apache Kafka cluster. See `kafka_cluster_client_authentication` Block for details.',
        () => mskconnect_ConnectorKafkaClusterClientAuthentication_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A summary description of the connector.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kafkaCluster',
        'Specifies which Apache Kafka cluster to connect to. See `kafka_cluster` Block for details.',
        () => mskconnect_ConnectorKafkaCluster_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kafkaClusterEncryptionInTransit',
        'Details of encryption in transit to the Apache Kafka cluster. See `kafka_cluster_encryption_in_transit` Block for details.',
        () => mskconnect_ConnectorKafkaClusterEncryptionInTransit_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kafkaconnectVersion',
        "The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logDelivery',
        'Details about log delivery. See `log_delivery` Block for details.',
        () => mskconnect_ConnectorLogDelivery_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'capacity',
        'Information about the capacity allocated to the connector. See `capacity` Block for details.',
        () => mskconnect_ConnectorCapacity_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'workerConfiguration',
        'Specifies which worker configuration to use with the connector. See `worker_configuration` Block for details.',
        () => mskconnect_ConnectorWorkerConfiguration_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
