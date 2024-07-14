import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface msk_ReplicatorKafkaClusterVpcConfig {
  // The AWS security groups to associate with the ENIs used by the replicator. If a security group is not specified, the default security group associated with the VPC is used.
  securityGroupsIds?: Array<string>;

  // The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets to allow communication between your Kafka Cluster and the replicator.
  subnetIds?: Array<string>;
}

export function msk_ReplicatorKafkaClusterVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupsIds",
      "The AWS security groups to associate with the ENIs used by the replicator. If a security group is not specified, the default security group associated with the VPC is used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets to allow communication between your Kafka Cluster and the replicator.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
