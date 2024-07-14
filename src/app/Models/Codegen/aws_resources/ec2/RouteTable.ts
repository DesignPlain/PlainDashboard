import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_RouteTableRoute,
  ec2_RouteTableRoute_GetTypes,
} from "../types/ec2_RouteTableRoute";

export interface RouteTableArgs {
  // A list of virtual gateways for propagation.
  propagatingVgws?: Array<string>;

  /*
A list of route objects. Their keys are documented below.
This means that omitting this argument is interpreted as ignoring any existing routes. To remove all managed routes an empty list should be specified. See the example above.
*/
  routes?: Array<ec2_RouteTableRoute>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The VPC ID.
  vpcId?: string;
}
export class RouteTable extends Resource {
  // The ID of the AWS account that owns the route table.
  public ownerId?: string;

  // A list of virtual gateways for propagation.
  public propagatingVgws?: Array<string>;

  /*
A list of route objects. Their keys are documented below.
This means that omitting this argument is interpreted as ignoring any existing routes. To remove all managed routes an empty list should be specified. See the example above.
*/
  public routes?: Array<ec2_RouteTableRoute>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC ID.
  public vpcId?: string;

  // The ARN of the route table.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "propagatingVgws",
        "A list of virtual gateways for propagation.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routes",
        "A list of route objects. Their keys are documented below.\nThis means that omitting this argument is interpreted as ignoring any existing routes. To remove all managed routes an empty list should be specified. See the example above.",
        ec2_RouteTableRoute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The VPC ID.",
        [],
        true,
        true,
      ),
    ];
  }
}
