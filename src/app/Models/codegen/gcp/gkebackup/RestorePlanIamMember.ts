import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkebackup_RestorePlanIamMemberCondition,
  gkebackup_RestorePlanIamMemberCondition_GetTypes,
} from '../types/gkebackup_RestorePlanIamMemberCondition';

export interface RestorePlanIamMemberArgs {
  //
  role?: string;

  //
  condition?: gkebackup_RestorePlanIamMemberCondition;

  // The region of the Restore Plan.
  location?: string;

  //
  member?: string;

  // The full name of the BackupPlan Resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class RestorePlanIamMember extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  //
  public role?: string;

  //
  public condition?: gkebackup_RestorePlanIamMemberCondition;

  //
  public etag?: string;

  // The region of the Restore Plan.
  public location?: string;

  //
  public member?: string;

  // The full name of the BackupPlan Resource.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => gkebackup_RestorePlanIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The region of the Restore Plan.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The full name of the BackupPlan Resource.',
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
    ];
  }
}
