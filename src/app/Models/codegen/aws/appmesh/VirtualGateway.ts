import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpec,
  appmesh_VirtualGatewaySpec_GetTypes,
} from '../types/appmesh_VirtualGatewaySpec';

export interface VirtualGatewayArgs {
  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  meshOwner?: string;

  // Name to use for the virtual gateway. Must be between 1 and 255 characters in length.
  name?: string;

  // Virtual gateway specification to apply.
  spec?: appmesh_VirtualGatewaySpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the service mesh in which to create the virtual gateway. Must be between 1 and 255 characters in length.
  meshName?: string;
}
export class VirtualGateway extends DS_Resource {
  // Resource owner's AWS account ID.
  public resourceOwner?: string;

  // Creation date of the virtual gateway.
  public createdDate?: string;

  // Last update date of the virtual gateway.
  public lastUpdatedDate?: string;

  // AWS account ID of the service mesh's owner. Defaults to the account ID the AWS provider is currently connected to.
  public meshOwner?: string;

  // Virtual gateway specification to apply.
  public spec?: appmesh_VirtualGatewaySpec;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the virtual gateway.
  public arn?: string;

  // Name of the service mesh in which to create the virtual gateway. Must be between 1 and 255 characters in length.
  public meshName?: string;

  // Name to use for the virtual gateway. Must be between 1 and 255 characters in length.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'spec',
        'Virtual gateway specification to apply.',
        () => appmesh_VirtualGatewaySpec_GetTypes(),
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
        'Name of the service mesh in which to create the virtual gateway. Must be between 1 and 255 characters in length.',
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
        'Name to use for the virtual gateway. Must be between 1 and 255 characters in length.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
