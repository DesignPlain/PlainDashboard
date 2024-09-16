import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_InstanceIamBindingCondition,
  securitycenter_InstanceIamBindingCondition_GetTypes,
} from '../types/securitycenter_InstanceIamBindingCondition';

export interface InstanceIamBindingArgs {
  // The region of the Data Fusion instance.
  region?: string;

  //
  role?: string;

  //
  condition?: securitycenter_InstanceIamBindingCondition;

  //
  members?: Array<string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class InstanceIamBinding extends DS_Resource {
  // The region of the Data Fusion instance.
  public region?: string;

  //
  public role?: string;

  //
  public condition?: securitycenter_InstanceIamBindingCondition;

  //
  public etag?: string;

  //
  public members?: Array<string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        () => securitycenter_InstanceIamBindingCondition_GetTypes(),
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
    ];
  }
}
