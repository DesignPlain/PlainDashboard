import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DelegatedAdminAccountArgs {
  // Account to enable as delegated admin account.
  accountId?: string;
}
export class DelegatedAdminAccount extends Resource {
  // Account to enable as delegated admin account.
  public accountId?: string;

  // Status of this delegated admin account.
  public relationshipStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "Account to enable as delegated admin account.",
        [],
        true,
        true,
      ),
    ];
  }
}
