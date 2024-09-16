import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpec,
  appmesh_RouteSpec_GetTypes,
} from '../types/appmesh_RouteSpec';

export interface RouteArgs {
  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the route. Must be between 1 and 255 characters in length.
  name?: string;

  // Route specification to apply.
  spec?: appmesh_RouteSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.
  virtualRouterName?: string;

  // Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.
  meshName?: string;
}
export class Route extends DS_Resource {
  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Name to use for the route. Must be between 1 and 255 characters in length.
  public name?: string;

  // Route specification to apply.
  public spec?: appmesh_RouteSpec;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.
  public virtualRouterName?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the route.
  public arn?: string;

  // Creation date of the route.
  public createdDate?: string;

  // Last update date of the route.
  public lastUpdatedDate?: string;

  // Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.
  public meshName?: string;

  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'meshName',
        'Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'meshOwner',
        "AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name to use for the route. Must be between 1 and 255 characters in length.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'spec',
        'Route specification to apply.',
        () => appmesh_RouteSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'virtualRouterName',
        'Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
