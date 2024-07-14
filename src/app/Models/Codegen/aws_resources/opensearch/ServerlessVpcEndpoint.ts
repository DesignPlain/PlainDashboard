import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opensearch_ServerlessVpcEndpointTimeouts,
  opensearch_ServerlessVpcEndpointTimeouts_GetTypes,
} from "../types/opensearch_ServerlessVpcEndpointTimeouts";

export interface ServerlessVpcEndpointArgs {
  // Name of the interface endpoint.
  name?: string;

  // One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. Up to 5 security groups can be provided.
  securityGroupIds?: Array<string>;

  // One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided.
  subnetIds?: Array<string>;

  //
  timeouts?: opensearch_ServerlessVpcEndpointTimeouts;

  /*
ID of the VPC from which you'll access OpenSearch Serverless.

The following arguments are optional:
*/
  vpcId?: string;
}
export class ServerlessVpcEndpoint extends Resource {
  // Name of the interface endpoint.
  public name?: string;

  // One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. Up to 5 security groups can be provided.
  public securityGroupIds?: Array<string>;

  // One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided.
  public subnetIds?: Array<string>;

  //
  public timeouts?: opensearch_ServerlessVpcEndpointTimeouts;

  /*
ID of the VPC from which you'll access OpenSearch Serverless.

The following arguments are optional:
*/
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "ID of the VPC from which you'll access OpenSearch Serverless.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the interface endpoint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. Up to 5 security groups can be provided.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        opensearch_ServerlessVpcEndpointTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
