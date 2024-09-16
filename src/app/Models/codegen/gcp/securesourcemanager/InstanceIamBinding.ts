import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securesourcemanager_InstanceIamBindingCondition,
  securesourcemanager_InstanceIamBindingCondition_GetTypes,
} from '../types/securesourcemanager_InstanceIamBindingCondition';

export interface InstanceIamBindingArgs {
  //
  condition?: securesourcemanager_InstanceIamBindingCondition;

  //
  instanceId?: string;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  project?: string;

  //
  role?: string;
}
export class InstanceIamBinding extends DS_Resource {
  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: securesourcemanager_InstanceIamBindingCondition;

  //
  public etag?: string;

  //
  public instanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        '',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'members',
        '',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => securesourcemanager_InstanceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
