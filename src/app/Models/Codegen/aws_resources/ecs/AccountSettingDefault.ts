import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AccountSettingDefaultArgs {
  // Name of the account setting to set.
  name?: string;

  // State of the setting.
  value?: string;
}
export class AccountSettingDefault extends Resource {
  //
  public principalArn?: string;

  // State of the setting.
  public value?: string;

  // Name of the account setting to set.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "value",
        "State of the setting.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the account setting to set.",
        [],
        false,
        true,
      ),
    ];
  }
}
