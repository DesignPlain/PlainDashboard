import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface OrganizationAdminAccountArgs {
  // The AWS account identifier of the account to designate as the Security Hub administrator account.
  adminAccountId?: string;
}
export class OrganizationAdminAccount extends DS_Resource {
  // The AWS account identifier of the account to designate as the Security Hub administrator account.
  public adminAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "adminAccountId",
        "The AWS account identifier of the account to designate as the Security Hub administrator account.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
