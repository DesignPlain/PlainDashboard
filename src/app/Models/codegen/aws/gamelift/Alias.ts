import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gamelift_AliasRoutingStrategy,
  gamelift_AliasRoutingStrategy_GetTypes,
} from '../types/gamelift_AliasRoutingStrategy';

export interface AliasArgs {
  // Name of the alias.
  name?: string;

  // Specifies the fleet and/or routing type to use for the alias.
  routingStrategy?: gamelift_AliasRoutingStrategy;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description of the alias.
  description?: string;
}
export class Alias extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Alias ARN.
  public arn?: string;

  // Description of the alias.
  public description?: string;

  // Name of the alias.
  public name?: string;

  // Specifies the fleet and/or routing type to use for the alias.
  public routingStrategy?: gamelift_AliasRoutingStrategy;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the alias.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'routingStrategy',
        'Specifies the fleet and/or routing type to use for the alias.',
        () => gamelift_AliasRoutingStrategy_GetTypes(),
        true,
        false,
      ),
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
        'description',
        'Description of the alias.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
