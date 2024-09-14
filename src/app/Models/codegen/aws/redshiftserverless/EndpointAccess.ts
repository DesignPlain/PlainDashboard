import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redshiftserverless_EndpointAccessVpcEndpoint,
  redshiftserverless_EndpointAccessVpcEndpoint_GetTypes,
} from "../types/redshiftserverless_EndpointAccessVpcEndpoint";

export interface EndpointAccessArgs {
  // An array of VPC subnet IDs to associate with the endpoint.
  subnetIds?: Array<string>;

  // An array of security group IDs to associate with the workgroup.
  vpcSecurityGroupIds?: Array<string>;

  // The name of the workgroup.
  workgroupName?: string;

  // The name of the endpoint.
  endpointName?: string;

  // The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
  ownerAccount?: string;
}
export class EndpointAccess extends DS_Resource {
  // The name of the workgroup.
  public workgroupName?: string;

  // The DNS address of the VPC endpoint.
  public address?: string;

  // The name of the endpoint.
  public endpointName?: string;

  // The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
  public ownerAccount?: string;

  // An array of VPC subnet IDs to associate with the endpoint.
  public subnetIds?: Array<string>;

  // Amazon Resource Name (ARN) of the Redshift Serverless Endpoint Access.
  public arn?: string;

  // The port that Amazon Redshift Serverless listens on.
  public port?: number;

  // The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.
  public vpcEndpoints?: Array<redshiftserverless_EndpointAccessVpcEndpoint>;

  // An array of security group IDs to associate with the workgroup.
  public vpcSecurityGroupIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ownerAccount",
        "The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "An array of VPC subnet IDs to associate with the endpoint.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "An array of security group IDs to associate with the workgroup.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroupName",
        "The name of the workgroup.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointName",
        "The name of the endpoint.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
