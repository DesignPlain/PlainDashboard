import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iot_ThingTypeProperties,
  iot_ThingTypeProperties_GetTypes,
} from '../types/iot_ThingTypeProperties';

export interface ThingTypeArgs {
  // The name of the thing type.
  name?: string;

  // , Configuration block that can contain the following properties of the thing type:
  properties?: iot_ThingTypeProperties;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // Whether the thing type is deprecated. If true, no new things could be associated with this type.
  deprecated?: boolean;
}
export class ThingType extends DS_Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the created AWS IoT Thing Type.
  public arn?: string;

  // Whether the thing type is deprecated. If true, no new things could be associated with this type.
  public deprecated?: boolean;

  // The name of the thing type.
  public name?: string;

  // , Configuration block that can contain the following properties of the thing type:
  public properties?: iot_ThingTypeProperties;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'properties',
        ', Configuration block that can contain the following properties of the thing type:',
        () => iot_ThingTypeProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'deprecated',
        'Whether the thing type is deprecated. If true, no new things could be associated with this type.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the thing type.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
