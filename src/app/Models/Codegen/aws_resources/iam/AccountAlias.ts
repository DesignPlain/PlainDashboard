import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccountAliasArgs {
  // The account alias
  accountAlias?: string;
}
export class AccountAlias extends Resource {
  // The account alias
  public accountAlias?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountAlias",
        "The account alias",
        [],
        true,
        true,
      ),
    ];
  }
}
