import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpec,
  appmesh_RouteSpec_GetTypes,
} from "../types/appmesh_RouteSpec";

export interface RouteArgs {
  // Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.
  virtualRouterName?: string;

  // Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.
  meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the route. Must be between 1 and 255 characters in length.
  name?: string;

  // Route specification to apply.
  spec?: appmesh_RouteSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Route extends Resource {
  // Name to use for the route. Must be between 1 and 255 characters in length.
  public name?: string;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.
  public virtualRouterName?: string;

  // ARN of the route.
  public arn?: string;

  // Last update date of the route.
  public lastUpdatedDate?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Creation date of the route.
  public createdDate?: string;

  // Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.
  public meshName?: string;

  // Route specification to apply.
  public spec?: appmesh_RouteSpec;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "virtualRouterName",
        "Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "meshName",
        "Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.",
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
        "Name to use for the route. Must be between 1 and 255 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Route specification to apply.",
        appmesh_RouteSpec_GetTypes(),
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
    ];
  }
}
