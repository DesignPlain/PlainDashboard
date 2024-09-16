import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networksecurity_AddressGroupIamBindingCondition,
  networksecurity_AddressGroupIamBindingCondition_GetTypes,
} from '../types/networksecurity_AddressGroupIamBindingCondition';

export interface AddressGroupIamBindingArgs {
  //
  members?: Array<string>;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: networksecurity_AddressGroupIamBindingCondition;

  //
  location?: string;
}
export class AddressGroupIamBinding extends DS_Resource {
  //
  public members?: Array<string>;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: networksecurity_AddressGroupIamBindingCondition;

  //
  public etag?: string;

  //
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'members',
        '',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
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
        () => networksecurity_AddressGroupIamBindingCondition_GetTypes(),
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
    ];
  }
}
