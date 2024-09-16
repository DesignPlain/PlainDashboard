import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_ClusterOpenMonitoring,
  msk_ClusterOpenMonitoring_GetTypes,
} from '../types/msk_ClusterOpenMonitoring';
import {
  msk_ClusterClientAuthentication,
  msk_ClusterClientAuthentication_GetTypes,
} from '../types/msk_ClusterClientAuthentication';
import {
  msk_ClusterLoggingInfo,
  msk_ClusterLoggingInfo_GetTypes,
} from '../types/msk_ClusterLoggingInfo';
import {
  msk_ClusterBrokerNodeGroupInfo,
  msk_ClusterBrokerNodeGroupInfo_GetTypes,
} from '../types/msk_ClusterBrokerNodeGroupInfo';
import {
  msk_ClusterConfigurationInfo,
  msk_ClusterConfigurationInfo_GetTypes,
} from '../types/msk_ClusterConfigurationInfo';
import {
  msk_ClusterEncryptionInfo,
  msk_ClusterEncryptionInfo_GetTypes,
} from '../types/msk_ClusterEncryptionInfo';

export interface ClusterArgs {
  // Configuration block for the broker nodes of the Kafka cluster.
  brokerNodeGroupInfo?: msk_ClusterBrokerNodeGroupInfo;

  // Name of the MSK cluster.
  clusterName?: string;

  // Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
  configurationInfo?: msk_ClusterConfigurationInfo;

  // Configuration block for specifying encryption. See below.
  encryptionInfo?: msk_ClusterEncryptionInfo;

  // Specify the desired enhanced MSK CloudWatch monitoring level. See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
  enhancedMonitoring?: string;

  // Specify the desired Kafka software version.
  kafkaVersion?: string;

  // Configuration block for JMX and Node monitoring for the MSK cluster. See below.
  openMonitoring?: msk_ClusterOpenMonitoring;

  // Configuration block for specifying a client authentication. See below.
  clientAuthentication?: msk_ClusterClientAuthentication;

  // Configuration block for streaming broker logs to Cloudwatch/S3/Kinesis Firehose. See below.
  loggingInfo?: msk_ClusterLoggingInfo;

  // The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
  numberOfBrokerNodes?: number;

  // Controls storage mode for supported storage tiers. Valid values are: `LOCAL` or `TIERED`.
  storageMode?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Cluster extends DS_Resource {
  // The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
  public numberOfBrokerNodes?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // One or more DNS names (or IP addresses) and TLS port pairs. For example, `b-1-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9194,b-2-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9194,b-3-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9194`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS` and `broker_node_group_info.0.connectivity_info.0.public_access.0.type` is set to `SERVICE_PROVIDED_EIPS` and the cluster fulfill all other requirements for public access. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersPublicTls?: string;

  // One or more DNS names (or IP addresses) and SASL IAM port pairs. For example, `b-1.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9098,b-2.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9098,b-3.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9098`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS` and `client_authentication.0.sasl.0.iam` is set to `true`. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersSaslIam?: string;

  // Configuration block for specifying a client authentication. See below.
  public clientAuthentication?: msk_ClusterClientAuthentication;

  // Name of the MSK cluster.
  public clusterName?: string;

  // Specify the desired enhanced MSK CloudWatch monitoring level. See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
  public enhancedMonitoring?: string;

  // One or more DNS names (or IP addresses) and SASL SCRAM port pairs. For example, `b-1.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9096,b-2.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9096,b-3.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9096`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS` and `client_authentication.0.sasl.0.scram` is set to `true`. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersSaslScram?: string;

  // UUID of the MSK cluster, for use in IAM policies.
  public clusterUuid?: string;

  // One or more DNS names (or IP addresses) and SASL SCRAM port pairs. For example, `b-1-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9196,b-2-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9196,b-3-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9196`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS` and `client_authentication.0.sasl.0.scram` is set to `true` and `broker_node_group_info.0.connectivity_info.0.public_access.0.type` is set to `SERVICE_PROVIDED_EIPS` and the cluster fulfill all other requirements for public access. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersPublicSaslScram?: string;

  // A string containing one or more DNS names (or IP addresses) and SASL SCRAM port pairs for VPC connectivity. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersVpcConnectivitySaslScram?: string;

  // Configuration block for specifying encryption. See below.
  public encryptionInfo?: msk_ClusterEncryptionInfo;

  // Comma separated list of one or more hostname:port pairs of kafka brokers suitable to bootstrap connectivity to the kafka cluster. Contains a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `PLAINTEXT` or `TLS_PLAINTEXT`. The resource sorts values alphabetically. AWS may not always return all endpoints so this value is not guaranteed to be stable across applies.
  public bootstrapBrokers?: string;

  // One or more DNS names (or IP addresses) and SASL IAM port pairs. For example, `b-1-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9198,b-2-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9198,b-3-public.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9198`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS` and `client_authentication.0.sasl.0.iam` is set to `true` and `broker_node_group_info.0.connectivity_info.0.public_access.0.type` is set to `SERVICE_PROVIDED_EIPS` and the cluster fulfill all other requirements for public access. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersPublicSaslIam?: string;

  // Configuration block for the broker nodes of the Kafka cluster.
  public brokerNodeGroupInfo?: msk_ClusterBrokerNodeGroupInfo;

  // Configuration block for streaming broker logs to Cloudwatch/S3/Kinesis Firehose. See below.
  public loggingInfo?: msk_ClusterLoggingInfo;

  // Amazon Resource Name (ARN) of the MSK cluster.
  public arn?: string;

  // Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
  public configurationInfo?: msk_ClusterConfigurationInfo;

  // Specify the desired Kafka software version.
  public kafkaVersion?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A string containing one or more DNS names (or IP addresses) and TLS port pairs for VPC connectivity. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersVpcConnectivityTls?: string;

  // Controls storage mode for supported storage tiers. Valid values are: `LOCAL` or `TIERED`.
  public storageMode?: string;

  // A comma separated list of one or more hostname:port pairs to use to connect to the Apache Zookeeper cluster via TLS. The returned values are sorted alphabetically. The AWS API may not return all endpoints, so this value is not guaranteed to be stable across applies.
  public zookeeperConnectStringTls?: string;

  // Configuration block for JMX and Node monitoring for the MSK cluster. See below.
  public openMonitoring?: msk_ClusterOpenMonitoring;

  // A comma separated list of one or more hostname:port pairs to use to connect to the Apache Zookeeper cluster. The returned values are sorted alphabetically. The AWS API may not return all endpoints, so this value is not guaranteed to be stable across applies.
  public zookeeperConnectString?: string;

  // One or more DNS names (or IP addresses) and TLS port pairs. For example, `b-1.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9094,b-2.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9094,b-3.exampleClusterName.abcde.c2.kafka.us-east-1.amazonaws.com:9094`. This attribute will have a value if `encryption_info.0.encryption_in_transit.0.client_broker` is set to `TLS_PLAINTEXT` or `TLS`. The resource sorts the list alphabetically. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersTls?: string;

  // A string containing one or more DNS names (or IP addresses) and SASL IAM port pairs for VPC connectivity. AWS may not always return all endpoints so the values may not be stable across applies.
  public bootstrapBrokersVpcConnectivitySaslIam?: string;

  // Current version of the MSK Cluster used for updates, e.g., `K13V1IB3VIYZZH`
  public currentVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'numberOfBrokerNodes',
        'The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'storageMode',
        'Controls storage mode for supported storage tiers. Valid values are: `LOCAL` or `TIERED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'encryptionInfo',
        'Configuration block for specifying encryption. See below.',
        () => msk_ClusterEncryptionInfo_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kafkaVersion',
        'Specify the desired Kafka software version.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'openMonitoring',
        'Configuration block for JMX and Node monitoring for the MSK cluster. See below.',
        () => msk_ClusterOpenMonitoring_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'enhancedMonitoring',
        'Specify the desired enhanced MSK CloudWatch monitoring level. See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clientAuthentication',
        'Configuration block for specifying a client authentication. See below.',
        () => msk_ClusterClientAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loggingInfo',
        'Configuration block for streaming broker logs to Cloudwatch/S3/Kinesis Firehose. See below.',
        () => msk_ClusterLoggingInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'brokerNodeGroupInfo',
        'Configuration block for the broker nodes of the Kafka cluster.',
        () => msk_ClusterBrokerNodeGroupInfo_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterName',
        'Name of the MSK cluster.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'configurationInfo',
        'Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.',
        () => msk_ClusterConfigurationInfo_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
