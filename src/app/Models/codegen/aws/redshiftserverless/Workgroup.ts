import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redshiftserverless_WorkgroupEndpoint,
  redshiftserverless_WorkgroupEndpoint_GetTypes,
} from "../types/redshiftserverless_WorkgroupEndpoint";
import {
  redshiftserverless_WorkgroupConfigParameter,
  redshiftserverless_WorkgroupConfigParameter_GetTypes,
} from "../types/redshiftserverless_WorkgroupConfigParameter";

export interface WorkgroupArgs {
  // The name of the namespace.
  namespaceName?: string;

  // A value that specifies whether the workgroup can be accessed from a public network.
  publiclyAccessible?: boolean;

  // An array of security group IDs to associate with the workgroup.
  securityGroupIds?: Array<string>;

  /*
The name of the workgroup.

The following arguments are optional:
*/
  workgroupName?: string;

  // An array of VPC subnet IDs to associate with the workgroup. When set, must contain at least three subnets spanning three Availability Zones. A minimum number of IP addresses is required and scales with the Base Capacity. For more information, see the following [AWS document](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-known-issues.html).
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
  baseCapacity?: number;

  // An array of parameters to set for more control over a serverless database. See `Config Parameter` below.
  configParameters?: Array<redshiftserverless_WorkgroupConfigParameter>;

  // The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.
  enhancedVpcRouting?: boolean;

  // The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries, specified in Redshift Processing Units (RPUs).
  maxCapacity?: number;

  // The port number on which the cluster accepts incoming connections.
  port?: number;
}
export class Workgroup extends DS_Resource {
  // The port number on which the cluster accepts incoming connections.
  public port?: number;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Redshift Workgroup ID.
  public workgroupId?: string;

  /*
The name of the workgroup.

The following arguments are optional:
*/
  public workgroupName?: string;

  // Amazon Resource Name (ARN) of the Redshift Serverless Workgroup.
  public arn?: string;

  // The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
  public baseCapacity?: number;

  // The endpoint that is created from the workgroup. See `Endpoint` below.
  public endpoints?: Array<redshiftserverless_WorkgroupEndpoint>;

  // An array of parameters to set for more control over a serverless database. See `Config Parameter` below.
  public configParameters?: Array<redshiftserverless_WorkgroupConfigParameter>;

  // An array of VPC subnet IDs to associate with the workgroup. When set, must contain at least three subnets spanning three Availability Zones. A minimum number of IP addresses is required and scales with the Base Capacity. For more information, see the following [AWS document](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-known-issues.html).
  public subnetIds?: Array<string>;

  // The name of the namespace.
  public namespaceName?: string;

  // A value that specifies whether the workgroup can be accessed from a public network.
  public publiclyAccessible?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.
  public enhancedVpcRouting?: boolean;

  // The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries, specified in Redshift Processing Units (RPUs).
  public maxCapacity?: number;

  // An array of security group IDs to associate with the workgroup.
  public securityGroupIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "configParameters",
        "An array of parameters to set for more control over a serverless database. See `Config Parameter` below.",
        () => redshiftserverless_WorkgroupConfigParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enhancedVpcRouting",
        "The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxCapacity",
        "The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries, specified in Redshift Processing Units (RPUs).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "An array of security group IDs to associate with the workgroup.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroupName",
        "The name of the workgroup.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "An array of VPC subnet IDs to associate with the workgroup. When set, must contain at least three subnets spanning three Availability Zones. A minimum number of IP addresses is required and scales with the Base Capacity. For more information, see the following [AWS document](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-known-issues.html).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "baseCapacity",
        "The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespaceName",
        "The name of the namespace.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "A value that specifies whether the workgroup can be accessed from a public network.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port number on which the cluster accepts incoming connections.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
