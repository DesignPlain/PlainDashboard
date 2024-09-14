import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DelegatedAdminAccountArgs {
  // Account to enable as delegated admin account.
  accountId?: string;
}
export class DelegatedAdminAccount extends DS_Resource {
  // Status of this delegated admin account.
  public relationshipStatus?: string;

  // Account to enable as delegated admin account.
  public accountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "Account to enable as delegated admin account.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
