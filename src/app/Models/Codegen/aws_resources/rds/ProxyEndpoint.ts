import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProxyEndpointArgs {
  // The identifier for the proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
  dbProxyEndpointName?: string;

  // The name of the DB proxy associated with the DB proxy endpoint that you create.
  dbProxyName?: string;

  // A mapping of tags to assign to the resource.
  tags?: Map<string, string>;

  // Indicates whether the DB proxy endpoint can be used for read/write or read-only operations. The default is `READ_WRITE`. Valid values are `READ_WRITE` and `READ_ONLY`.
  targetRole?: string;

  // One or more VPC security group IDs to associate with the new proxy.
  vpcSecurityGroupIds?: Array<string>;

  // One or more VPC subnet IDs to associate with the new proxy.
  vpcSubnetIds?: Array<string>;
}
export class ProxyEndpoint extends Resource {
  // The name of the DB proxy associated with the DB proxy endpoint that you create.
  public dbProxyName?: string;

  // Indicates whether this endpoint is the default endpoint for the associated DB proxy.
  public isDefault?: boolean;

  // A mapping of tags to assign to the resource.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // Indicates whether the DB proxy endpoint can be used for read/write or read-only operations. The default is `READ_WRITE`. Valid values are `READ_WRITE` and `READ_ONLY`.
  public targetRole?: string;

  // The VPC ID of the DB proxy endpoint.
  public vpcId?: string;

  // One or more VPC subnet IDs to associate with the new proxy.
  public vpcSubnetIds?: Array<string>;

  // The Amazon Resource Name (ARN) for the proxy endpoint.
  public arn?: string;

  // The identifier for the proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
  public dbProxyEndpointName?: string;

  // The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
  public endpoint?: string;

  // One or more VPC security group IDs to associate with the new proxy.
  public vpcSecurityGroupIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbProxyEndpointName",
        "The identifier for the proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbProxyName",
        "The name of the DB proxy associated with the DB proxy endpoint that you create.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetRole",
        "Indicates whether the DB proxy endpoint can be used for read/write or read-only operations. The default is `READ_WRITE`. Valid values are `READ_WRITE` and `READ_ONLY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "One or more VPC security group IDs to associate with the new proxy.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSubnetIds",
        "One or more VPC subnet IDs to associate with the new proxy.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
