import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RouteTableArgs {
  // Key-value tags for the EC2 Transit Gateway Route Table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Identifier of EC2 Transit Gateway.
  transitGatewayId?: string;
}
export class RouteTable extends Resource {
  // EC2 Transit Gateway Route Table Amazon Resource Name (ARN).
  public arn?: string;

  // Boolean whether this is the default association route table for the EC2 Transit Gateway.
  public defaultAssociationRouteTable?: boolean;

  // Boolean whether this is the default propagation route table for the EC2 Transit Gateway.
  public defaultPropagationRouteTable?: boolean;

  // Key-value tags for the EC2 Transit Gateway Route Table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the EC2 Transit Gateway Route Table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayId",
        "Identifier of EC2 Transit Gateway.",
        [],
        true,
        true,
      ),
    ];
  }
}
