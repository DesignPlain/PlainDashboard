import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualRouterSpec,
  appmesh_VirtualRouterSpec_GetTypes,
} from '../types/appmesh_VirtualRouterSpec';

export interface VirtualRouterArgs {
  // Virtual router specification to apply.
  spec?: appmesh_VirtualRouterSpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the service mesh in which to create the virtual router. Must be between 1 and 255 characters in length.
  meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the virtual router. Must be between 1 and 255 characters in length.
  name?: string;
}
export class VirtualRouter extends DS_Resource {
  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the virtual router.
  public arn?: string;

  // Creation date of the virtual router.
  public createdDate?: string;

  // Last update date of the virtual router.
  public lastUpdatedDate?: string;

  // Name of the service mesh in which to create the virtual router. Must be between 1 and 255 characters in length.
  public meshName?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Name to use for the virtual router. Must be between 1 and 255 characters in length.
  public name?: string;

  // Virtual router specification to apply.
  public spec?: appmesh_VirtualRouterSpec;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'Name to use for the virtual router. Must be between 1 and 255 characters in length.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'spec',
        'Virtual router specification to apply.',
        () => appmesh_VirtualRouterSpec_GetTypes(),
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
        'meshName',
        'Name of the service mesh in which to create the virtual router. Must be between 1 and 255 characters in length.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
