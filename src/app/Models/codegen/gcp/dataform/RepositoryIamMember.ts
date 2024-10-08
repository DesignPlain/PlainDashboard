import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataform_RepositoryIamMemberCondition,
  dataform_RepositoryIamMemberCondition_GetTypes,
} from '../types/dataform_RepositoryIamMemberCondition';

export interface RepositoryIamMemberArgs {
  //
  member?: string;

  //
  project?: string;

  //
  region?: string;

  //
  repository?: string;

  //
  role?: string;

  //
  condition?: dataform_RepositoryIamMemberCondition;
}
export class RepositoryIamMember extends DS_Resource {
  //
  public role?: string;

  //
  public condition?: dataform_RepositoryIamMemberCondition;

  //
  public etag?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public region?: string;

  //
  public repository?: string;

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
      new DynamicUIProps(InputType.String, 'region', '', () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        'repository',
        '',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => dataform_RepositoryIamMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
