import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  msk_ReplicatorKafkaClusterVpcConfig,
  msk_ReplicatorKafkaClusterVpcConfig_GetTypes,
} from "./msk_ReplicatorKafkaClusterVpcConfig";
import {
  msk_ReplicatorKafkaClusterAmazonMskCluster,
  msk_ReplicatorKafkaClusterAmazonMskCluster_GetTypes,
} from "./msk_ReplicatorKafkaClusterAmazonMskCluster";

export interface msk_ReplicatorKafkaCluster {
  // Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
  vpcConfig?: msk_ReplicatorKafkaClusterVpcConfig;

  // Details of an Amazon MSK cluster.
  amazonMskCluster?: msk_ReplicatorKafkaClusterAmazonMskCluster;
}

export function msk_ReplicatorKafkaCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "amazonMskCluster",
      "Details of an Amazon MSK cluster.",
      msk_ReplicatorKafkaClusterAmazonMskCluster_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConfig",
      "Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.",
      msk_ReplicatorKafkaClusterVpcConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
