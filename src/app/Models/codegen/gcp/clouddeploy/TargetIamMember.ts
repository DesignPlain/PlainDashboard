import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddeploy_TargetIamMemberCondition,
  clouddeploy_TargetIamMemberCondition_GetTypes,
} from '../types/clouddeploy_TargetIamMemberCondition';

export interface TargetIamMemberArgs {
  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_TargetIamMemberCondition;

  //
  location?: string;

  //
  member?: string;
}
export class TargetIamMember extends DS_Resource {
  //
  public role?: string;

  //
  public condition?: clouddeploy_TargetIamMemberCondition;

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
      new DynamicUIProps(InputType.String, 'name', '', () => [], false, true),
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
        () => clouddeploy_TargetIamMemberCondition_GetTypes(),
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
    ];
  }
}
