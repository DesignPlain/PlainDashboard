import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_InstanceIamMemberCondition,
  securitycenter_InstanceIamMemberCondition_GetTypes,
} from '../types/securitycenter_InstanceIamMemberCondition';

export interface InstanceIamMemberArgs {
  // The region of the Data Fusion instance.
  region?: string;

  //
  role?: string;

  //
  condition?: securitycenter_InstanceIamMemberCondition;

  //
  member?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class InstanceIamMember extends DS_Resource {
  //
  public condition?: securitycenter_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public member?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the Data Fusion instance.
  public region?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The ID of the instance or a fully qualified identifier for the instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The region of the Data Fusion instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => securitycenter_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
