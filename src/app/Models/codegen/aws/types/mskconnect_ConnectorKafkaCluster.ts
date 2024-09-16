import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mskconnect_ConnectorKafkaClusterApacheKafkaCluster,
  mskconnect_ConnectorKafkaClusterApacheKafkaCluster_GetTypes,
} from './mskconnect_ConnectorKafkaClusterApacheKafkaCluster';

export interface mskconnect_ConnectorKafkaCluster {
  // The Apache Kafka cluster to which the connector is connected. See `apache_kafka_cluster` Block for details.
  apacheKafkaCluster?: mskconnect_ConnectorKafkaClusterApacheKafkaCluster;
}

export function mskconnect_ConnectorKafkaCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'apacheKafkaCluster',
      'The Apache Kafka cluster to which the connector is connected. See `apache_kafka_cluster` Block for details.',
      () => mskconnect_ConnectorKafkaClusterApacheKafkaCluster_GetTypes(),
      true,
      true,
    ),
  ];
}
