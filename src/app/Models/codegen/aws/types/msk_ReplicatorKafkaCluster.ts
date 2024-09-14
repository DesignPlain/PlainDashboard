import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ReplicatorKafkaClusterAmazonMskCluster,
  msk_ReplicatorKafkaClusterAmazonMskCluster_GetTypes,
} from "./msk_ReplicatorKafkaClusterAmazonMskCluster";
import {
  msk_ReplicatorKafkaClusterVpcConfig,
  msk_ReplicatorKafkaClusterVpcConfig_GetTypes,
} from "./msk_ReplicatorKafkaClusterVpcConfig";

export interface msk_ReplicatorKafkaCluster {
  // Details of an Amazon MSK cluster.
  amazonMskCluster?: msk_ReplicatorKafkaClusterAmazonMskCluster;

  // Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
  vpcConfig?: msk_ReplicatorKafkaClusterVpcConfig;
}

export function msk_ReplicatorKafkaCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "amazonMskCluster",
      "Details of an Amazon MSK cluster.",
      () => msk_ReplicatorKafkaClusterAmazonMskCluster_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConfig",
      "Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.",
      () => msk_ReplicatorKafkaClusterVpcConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
