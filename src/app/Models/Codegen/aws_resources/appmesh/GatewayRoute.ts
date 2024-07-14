import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpec,
  appmesh_GatewayRouteSpec_GetTypes,
} from "../types/appmesh_GatewayRouteSpec";

export interface GatewayRouteArgs {
  // Name of the service mesh in which to create the gateway route. Must be between 1 and 255 characters in length.
  meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the gateway route. Must be between 1 and 255 characters in length.
  name?: string;

  // Gateway route specification to apply.
  spec?: appmesh_GatewayRouteSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the virtual gateway to associate the gateway route with. Must be between 1 and 255 characters in length.
  virtualGatewayName?: string;
}
export class GatewayRoute extends Resource {
  // Creation date of the gateway route.
  public createdDate?: string;

  // Last update date of the gateway route.
  public lastUpdatedDate?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Name to use for the gateway route. Must be between 1 and 255 characters in length.
  public name?: string;

  // Name of the virtual gateway to associate the gateway route with. Must be between 1 and 255 characters in length.
  public virtualGatewayName?: string;

  // ARN of the gateway route.
  public arn?: string;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Gateway route specification to apply.
  public spec?: appmesh_GatewayRouteSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Name of the service mesh in which to create the gateway route. Must be between 1 and 255 characters in length.
  public meshName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "meshName",
        "Name of the service mesh in which to create the gateway route. Must be between 1 and 255 characters in length.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "meshOwner",
        "AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name to use for the gateway route. Must be between 1 and 255 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Gateway route specification to apply.",
        appmesh_GatewayRouteSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "virtualGatewayName",
        "Name of the virtual gateway to associate the gateway route with. Must be between 1 and 255 characters in length.",
        [],
        true,
        true,
      ),
    ];
  }
}
