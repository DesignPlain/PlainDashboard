import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  redshiftserverless_EndpointAccessVpcEndpointNetworkInterface,
  redshiftserverless_EndpointAccessVpcEndpointNetworkInterface_GetTypes,
} from "./redshiftserverless_EndpointAccessVpcEndpointNetworkInterface";

export interface redshiftserverless_EndpointAccessVpcEndpoint {
  // The network interfaces of the endpoint.. See `Network Interface` below.
  networkInterfaces?: Array<redshiftserverless_EndpointAccessVpcEndpointNetworkInterface>;

  // The DNS address of the VPC endpoint.
  vpcEndpointId?: string;

  // The port that Amazon Redshift Serverless listens on.
  vpcId?: string;
}

export function redshiftserverless_EndpointAccessVpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The port that Amazon Redshift Serverless listens on.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "The network interfaces of the endpoint.. See `Network Interface` below.",
      redshiftserverless_EndpointAccessVpcEndpointNetworkInterface_GetTypes(),
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
  ];
}
