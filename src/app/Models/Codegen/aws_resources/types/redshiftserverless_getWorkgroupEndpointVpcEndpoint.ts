import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface,
  redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface_GetTypes,
} from "./redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface";

export interface redshiftserverless_getWorkgroupEndpointVpcEndpoint {
  // The network interfaces of the endpoint.. See `Network Interface` below.
  networkInterfaces?: Array<redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface>;

  // The DNS address of the VPC endpoint.
  vpcEndpointId?: string;

  // The port that Amazon Redshift Serverless listens on.
  vpcId?: string;
}

export function redshiftserverless_getWorkgroupEndpointVpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "The network interfaces of the endpoint.. See `Network Interface` below.",
      redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "The DNS address of the VPC endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The port that Amazon Redshift Serverless listens on.",
      [],
      true,
      false,
    ),
  ];
}
