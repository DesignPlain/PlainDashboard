import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mskconnect_ConnectorKafkaCluster,
  mskconnect_ConnectorKafkaCluster_GetTypes,
} from "../types/mskconnect_ConnectorKafkaCluster";
import {
  mskconnect_ConnectorKafkaClusterEncryptionInTransit,
  mskconnect_ConnectorKafkaClusterEncryptionInTransit_GetTypes,
} from "../types/mskconnect_ConnectorKafkaClusterEncryptionInTransit";
import {
  mskconnect_ConnectorPlugin,
  mskconnect_ConnectorPlugin_GetTypes,
} from "../types/mskconnect_ConnectorPlugin";
import {
  mskconnect_ConnectorKafkaClusterClientAuthentication,
  mskconnect_ConnectorKafkaClusterClientAuthentication_GetTypes,
} from "../types/mskconnect_ConnectorKafkaClusterClientAuthentication";
import {
  mskconnect_ConnectorLogDelivery,
  mskconnect_ConnectorLogDelivery_GetTypes,
} from "../types/mskconnect_ConnectorLogDelivery";
import {
  mskconnect_ConnectorWorkerConfiguration,
  mskconnect_ConnectorWorkerConfiguration_GetTypes,
} from "../types/mskconnect_ConnectorWorkerConfiguration";
import {
  mskconnect_ConnectorCapacity,
  mskconnect_ConnectorCapacity_GetTypes,
} from "../types/mskconnect_ConnectorCapacity";

export interface ConnectorArgs {
  // The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
  serviceExecutionRoleArn?: string;

  // Information about the capacity allocated to the connector. See below.
  capacity?: mskconnect_ConnectorCapacity;

  // A map of keys to values that represent the configuration for the connector.
  connectorConfiguration?: Map<string, string>;

  // A summary description of the connector.
  description?: string;

  // Specifies which Apache Kafka cluster to connect to. See below.
  kafkaCluster?: mskconnect_ConnectorKafkaCluster;

  // Details of encryption in transit to the Apache Kafka cluster. See below.
  kafkaClusterEncryptionInTransit?: mskconnect_ConnectorKafkaClusterEncryptionInTransit;

  // Specifies which plugins to use for the connector. See below.
  plugins?: Array<mskconnect_ConnectorPlugin>;

  // Details of the client authentication used by the Apache Kafka cluster. See below.
  kafkaClusterClientAuthentication?: mskconnect_ConnectorKafkaClusterClientAuthentication;

  // The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
  kafkaconnectVersion?: string;

  // Details about log delivery. See below.
  logDelivery?: mskconnect_ConnectorLogDelivery;

  // The name of the connector.
  name?: string;

  // Specifies which worker configuration to use with the connector. See below.
  workerConfiguration?: mskconnect_ConnectorWorkerConfiguration;
}
export class Connector extends Resource {
  // The Amazon Resource Name (ARN) of the custom plugin.
  public arn?: string;

  // A summary description of the connector.
  public description?: string;

  // Details about log delivery. See below.
  public logDelivery?: mskconnect_ConnectorLogDelivery;

  // Specifies which plugins to use for the connector. See below.
  public plugins?: Array<mskconnect_ConnectorPlugin>;

  // The current version of the connector.
  public version?: string;

  // Information about the capacity allocated to the connector. See below.
  public capacity?: mskconnect_ConnectorCapacity;

  // A map of keys to values that represent the configuration for the connector.
  public connectorConfiguration?: Map<string, string>;

  // Details of the client authentication used by the Apache Kafka cluster. See below.
  public kafkaClusterClientAuthentication?: mskconnect_ConnectorKafkaClusterClientAuthentication;

  // The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
  public kafkaconnectVersion?: string;

  // The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
  public serviceExecutionRoleArn?: string;

  // Specifies which worker configuration to use with the connector. See below.
  public workerConfiguration?: mskconnect_ConnectorWorkerConfiguration;

  // Specifies which Apache Kafka cluster to connect to. See below.
  public kafkaCluster?: mskconnect_ConnectorKafkaCluster;

  // Details of encryption in transit to the Apache Kafka cluster. See below.
  public kafkaClusterEncryptionInTransit?: mskconnect_ConnectorKafkaClusterEncryptionInTransit;

  // The name of the connector.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "kafkaClusterEncryptionInTransit",
        "Details of encryption in transit to the Apache Kafka cluster. See below.",
        mskconnect_ConnectorKafkaClusterEncryptionInTransit_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "plugins",
        "Specifies which plugins to use for the connector. See below.",
        mskconnect_ConnectorPlugin_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kafkaClusterClientAuthentication",
        "Details of the client authentication used by the Apache Kafka cluster. See below.",
        mskconnect_ConnectorKafkaClusterClientAuthentication_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kafkaconnectVersion",
        "The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the connector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workerConfiguration",
        "Specifies which worker configuration to use with the connector. See below.",
        mskconnect_ConnectorWorkerConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A summary description of the connector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kafkaCluster",
        "Specifies which Apache Kafka cluster to connect to. See below.",
        mskconnect_ConnectorKafkaCluster_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "connectorConfiguration",
        "A map of keys to values that represent the configuration for the connector.",
        InputType_Map_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logDelivery",
        "Details about log delivery. See below.",
        mskconnect_ConnectorLogDelivery_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceExecutionRoleArn",
        "The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "capacity",
        "Information about the capacity allocated to the connector. See below.",
        mskconnect_ConnectorCapacity_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
