import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_getBrokerNodesNodeInfoList {
  // ID of the broker
  brokerId?: number;

  // Client subnet to which this broker node belongs
  clientSubnet?: string;

  // The client virtual private cloud (VPC) IP address
  clientVpcIpAddress?: string;

  // Set of endpoints for accessing the broker. This does not include ports
  endpoints?: Array<string>;

  // ARN of the node
  nodeArn?: string;

  // Attached elastic network interface of the broker
  attachedEniId?: string;
}

export function msk_getBrokerNodesNodeInfoList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "endpoints",
      "Set of endpoints for accessing the broker. This does not include ports",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeArn",
      "ARN of the node",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attachedEniId",
      "Attached elastic network interface of the broker",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "brokerId",
      "ID of the broker",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientSubnet",
      "Client subnet to which this broker node belongs",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientVpcIpAddress",
      "The client virtual private cloud (VPC) IP address",
      () => [],
      true,
      false,
    ),
  ];
}
