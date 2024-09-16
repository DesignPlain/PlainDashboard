import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataform_RepositoryIamBindingCondition,
  dataform_RepositoryIamBindingCondition_GetTypes,
} from '../types/dataform_RepositoryIamBindingCondition';

export interface RepositoryIamBindingArgs {
  //
  role?: string;

  //
  condition?: dataform_RepositoryIamBindingCondition;

  //
  members?: Array<string>;

  //
  project?: string;

  //
  region?: string;

  //
  repository?: string;
}
export class RepositoryIamBinding extends DS_Resource {
  //
  public condition?: dataform_RepositoryIamBindingCondition;

  //
  public etag?: string;

  //
  public members?: Array<string>;

  //
  public project?: string;

  //
  public region?: string;

  //
  public repository?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        () => dataform_RepositoryIamBindingCondition_GetTypes(),
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
    ];
  }
}
