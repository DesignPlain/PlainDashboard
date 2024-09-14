import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redshift_EndpointAccessVpcEndpointNetworkInterface,
  redshift_EndpointAccessVpcEndpointNetworkInterface_GetTypes,
} from "./redshift_EndpointAccessVpcEndpointNetworkInterface";

export interface redshift_EndpointAccessVpcEndpoint {
  // One or more network interfaces of the endpoint. Also known as an interface endpoint. See details below.
  networkInterfaces?: Array<redshift_EndpointAccessVpcEndpointNetworkInterface>;

  // The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
  vpcEndpointId?: string;

  // The VPC identifier that the endpoint is associated.
  vpcId?: string;
}

export function redshift_EndpointAccessVpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "One or more network interfaces of the endpoint. Also known as an interface endpoint. See details below.",
      () => redshift_EndpointAccessVpcEndpointNetworkInterface_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The VPC identifier that the endpoint is associated.",
      () => [],
      false,
      false,
    ),
  ];
}
