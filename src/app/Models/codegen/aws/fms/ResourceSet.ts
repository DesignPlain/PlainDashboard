import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fms_ResourceSetResourceSet,
  fms_ResourceSetResourceSet_GetTypes,
} from '../types/fms_ResourceSetResourceSet';
import {
  fms_ResourceSetTimeouts,
  fms_ResourceSetTimeouts_GetTypes,
} from '../types/fms_ResourceSetTimeouts';

export interface ResourceSetArgs {
  // Details about the resource set to be created or updated. See `resource_set` Attribute Reference below.
  resourceSets?: Array<fms_ResourceSetResourceSet>;

  //
  tags?: Map<string, string>;

  //
  timeouts?: fms_ResourceSetTimeouts;
}
export class ResourceSet extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: fms_ResourceSetTimeouts;

  // ARN of the Resource Set.
  public arn?: string;

  // Details about the resource set to be created or updated. See `resource_set` Attribute Reference below.
  public resourceSets?: Array<fms_ResourceSetResourceSet>;

  //
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => fms_ResourceSetTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resourceSets',
        'Details about the resource set to be created or updated. See `resource_set` Attribute Reference below.',
        () => fms_ResourceSetResourceSet_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
