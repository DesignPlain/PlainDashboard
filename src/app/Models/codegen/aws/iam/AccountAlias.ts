import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccountAliasArgs {
  // The account alias
  accountAlias?: string;
}
export class AccountAlias extends DS_Resource {
  // The account alias
  public accountAlias?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountAlias",
        "The account alias",
        () => [],
        true,
        true,
      ),
    ];
  }
}
