import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AccountSettingDefaultArgs {
  // State of the setting.
  value?: string;

  // Name of the account setting to set.
  name?: string;
}
export class AccountSettingDefault extends DS_Resource {
  // Name of the account setting to set.
  public name?: string;

  //
  public principalArn?: string;

  // State of the setting.
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the account setting to set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'value',
        'State of the setting.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
