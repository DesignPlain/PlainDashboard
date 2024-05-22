import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LocalGatewayRouteTableVpcAssociationArgs {
  // Identifier of EC2 Local Gateway Route Table.
  localGatewayRouteTableId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Identifier of EC2 VPC.

The following arguments are optional:
*/
  vpcId?: string;
}
export class LocalGatewayRouteTableVpcAssociation extends Resource {
  //
  public localGatewayId?: string;

  // Identifier of EC2 Local Gateway Route Table.
  public localGatewayRouteTableId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Identifier of EC2 VPC.

The following arguments are optional:
*/
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "localGatewayRouteTableId",
        "Identifier of EC2 Local Gateway Route Table.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "Identifier of EC2 VPC.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
