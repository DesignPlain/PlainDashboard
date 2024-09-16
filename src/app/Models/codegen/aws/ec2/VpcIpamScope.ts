import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcIpamScopeArgs {
  // A description for the scope you're creating.
  description?: string;

  // The ID of the IPAM for which you're creating this scope.
  ipamId?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcIpamScope extends DS_Resource {
  //
  public ipamScopeType?: string;

  // Defines if the scope is the default scope or not.
  public isDefault?: boolean;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The ARN of the IPAM for which you're creating this scope.
  public ipamArn?: string;

  // A description for the scope you're creating.
  public description?: string;

  // The ID of the IPAM for which you're creating this scope.
  public ipamId?: string;

  // The number of pools in the scope.
  public poolCount?: number;

  // The Amazon Resource Name (ARN) of the scope.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ipamId',
        "The ID of the IPAM for which you're creating this scope.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        "A description for the scope you're creating.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
