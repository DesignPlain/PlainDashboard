import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  workbench_InstanceIamMemberCondition,
  workbench_InstanceIamMemberCondition_GetTypes,
} from '../types/workbench_InstanceIamMemberCondition';

export interface InstanceIamMemberArgs {
  //
  project?: string;

  //
  role?: string;

  //
  condition?: workbench_InstanceIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;
}
export class InstanceIamMember extends DS_Resource {
  //
  public role?: string;

  //
  public condition?: workbench_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public member?: string;

  //
  public name?: string;

  //
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => workbench_InstanceIamMemberCondition_GetTypes(),
        false,
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
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(InputType.String, 'name', '', () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        'project',
        '',
        () => [],
        false,
        true,
      ),
    ];
  }
}
