import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface,
  redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface_GetTypes,
} from "./redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface";

export interface redshiftserverless_WorkgroupEndpointVpcEndpoint {
  // The network interfaces of the endpoint.. See `Network Interface` below.
  networkInterfaces?: Array<redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface>;

  // The DNS address of the VPC endpoint.
  vpcEndpointId?: string;

  // The port that Amazon Redshift Serverless listens on.
  vpcId?: string;
}

export function redshiftserverless_WorkgroupEndpointVpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "The network interfaces of the endpoint.. See `Network Interface` below.",
      redshiftserverless_WorkgroupEndpointVpcEndpointNetworkInterface_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "The DNS address of the VPC endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The port that Amazon Redshift Serverless listens on.",
      [],
      false,
      false,
    ),
  ];
}
