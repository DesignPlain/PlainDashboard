import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securesourcemanager_InstanceIamMemberCondition,
  securesourcemanager_InstanceIamMemberCondition_GetTypes,
} from '../types/securesourcemanager_InstanceIamMemberCondition';

export interface InstanceIamMemberArgs {
  //
  member?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: securesourcemanager_InstanceIamMemberCondition;

  //
  instanceId?: string;

  //
  location?: string;
}
export class InstanceIamMember extends DS_Resource {
  //
  public condition?: securesourcemanager_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public instanceId?: string;

  //
  public location?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
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
        () => securesourcemanager_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
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
    ];
  }
}
