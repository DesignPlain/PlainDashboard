import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mskconnect_ConnectorKafkaClusterApacheKafkaCluster,
  mskconnect_ConnectorKafkaClusterApacheKafkaCluster_GetTypes,
} from "./mskconnect_ConnectorKafkaClusterApacheKafkaCluster";

export interface mskconnect_ConnectorKafkaCluster {
  // The Apache Kafka cluster to which the connector is connected.
  apacheKafkaCluster?: mskconnect_ConnectorKafkaClusterApacheKafkaCluster;
}

export function mskconnect_ConnectorKafkaCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "apacheKafkaCluster",
      "The Apache Kafka cluster to which the connector is connected.",
      mskconnect_ConnectorKafkaClusterApacheKafkaCluster_GetTypes(),
      true,
      true,
    ),
  ];
}
