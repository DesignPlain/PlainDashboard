import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ProtectionArgs {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A friendly name for the Protection you are creating.
  name?: string;

  // The ARN (Amazon Resource Name) of the resource to be protected.
  resourceArn?: string;
}
export class Protection extends DS_Resource {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Protection.
  public arn?: string;

  // A friendly name for the Protection you are creating.
  public name?: string;

  // The ARN (Amazon Resource Name) of the resource to be protected.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A friendly name for the Protection you are creating.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'The ARN (Amazon Resource Name) of the resource to be protected.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
