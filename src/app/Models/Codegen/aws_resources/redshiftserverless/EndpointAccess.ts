import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redshiftserverless_EndpointAccessVpcEndpoint,
  redshiftserverless_EndpointAccessVpcEndpoint_GetTypes,
} from "../types/redshiftserverless_EndpointAccessVpcEndpoint";

export interface EndpointAccessArgs {
  // The name of the endpoint.
  endpointName?: string;

  // The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
  ownerAccount?: string;

  // An array of VPC subnet IDs to associate with the endpoint.
  subnetIds?: Array<string>;

  // An array of security group IDs to associate with the workgroup.
  vpcSecurityGroupIds?: Array<string>;

  // The name of the workgroup.
  workgroupName?: string;
}
export class EndpointAccess extends Resource {
  // An array of security group IDs to associate with the workgroup.
  public vpcSecurityGroupIds?: Array<string>;

  // Amazon Resource Name (ARN) of the Redshift Serverless Endpoint Access.
  public arn?: string;

  // The port that Amazon Redshift Serverless listens on.
  public port?: number;

  // An array of VPC subnet IDs to associate with the endpoint.
  public subnetIds?: Array<string>;

  // The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.
  public vpcEndpoints?: Array<redshiftserverless_EndpointAccessVpcEndpoint>;

  // The DNS address of the VPC endpoint.
  public address?: string;

  // The name of the endpoint.
  public endpointName?: string;

  // The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
  public ownerAccount?: string;

  // The name of the workgroup.
  public workgroupName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "endpointName",
        "The name of the endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerAccount",
        "The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "An array of VPC subnet IDs to associate with the endpoint.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "An array of security group IDs to associate with the workgroup.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroupName",
        "The name of the workgroup.",
        [],
        true,
        true,
      ),
    ];
  }
}
