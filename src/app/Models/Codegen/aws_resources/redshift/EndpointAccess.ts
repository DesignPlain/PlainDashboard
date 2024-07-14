import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  redshift_EndpointAccessVpcEndpoint,
  redshift_EndpointAccessVpcEndpoint_GetTypes,
} from "../types/redshift_EndpointAccessVpcEndpoint";

export interface EndpointAccessArgs {
  // The cluster identifier of the cluster to access.
  clusterIdentifier?: string;

  // The Redshift-managed VPC endpoint name.
  endpointName?: string;

  // The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
  resourceOwner?: string;

  // The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.
  subnetGroupName?: string;

  // The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
  vpcSecurityGroupIds?: Array<string>;
}
export class EndpointAccess extends Resource {
  // The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
  public resourceOwner?: string;

  // The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.
  public subnetGroupName?: string;

  // The connection endpoint for connecting to an Amazon Redshift cluster through the proxy. See details below.
  public vpcEndpoints?: Array<redshift_EndpointAccessVpcEndpoint>;

  // The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
  public vpcSecurityGroupIds?: Array<string>;

  // The DNS address of the endpoint.
  public address?: string;

  // The cluster identifier of the cluster to access.
  public clusterIdentifier?: string;

  // The Redshift-managed VPC endpoint name.
  public endpointName?: string;

  // The port number on which the cluster accepts incoming connections.
  public port?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceOwner",
        "The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetGroupName",
        "The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier of the cluster to access.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointName",
        "The Redshift-managed VPC endpoint name.",
        [],
        true,
        true,
      ),
    ];
  }
}
