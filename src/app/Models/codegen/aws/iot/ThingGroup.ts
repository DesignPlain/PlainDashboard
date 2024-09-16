import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iot_ThingGroupProperties,
  iot_ThingGroupProperties_GetTypes,
} from '../types/iot_ThingGroupProperties';
import {
  iot_ThingGroupMetadata,
  iot_ThingGroupMetadata_GetTypes,
} from '../types/iot_ThingGroupMetadata';

export interface ThingGroupArgs {
  // The name of the Thing Group.
  name?: string;

  // The name of the parent Thing Group.
  parentGroupName?: string;

  // The Thing Group properties. Defined below.
  properties?: iot_ThingGroupProperties;

  // Key-value mapping of resource tags
  tags?: Map<string, string>;
}
export class ThingGroup extends DS_Resource {
  // The name of the Thing Group.
  public name?: string;

  // The name of the parent Thing Group.
  public parentGroupName?: string;

  // The Thing Group properties. Defined below.
  public properties?: iot_ThingGroupProperties;

  // Key-value mapping of resource tags
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The current version of the Thing Group record in the registry.
  public version?: number;

  // The ARN of the Thing Group.
  public arn?: string;

  //
  public metadatas?: Array<iot_ThingGroupMetadata>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the Thing Group.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentGroupName',
        'The name of the parent Thing Group.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'properties',
        'The Thing Group properties. Defined below.',
        () => iot_ThingGroupProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
