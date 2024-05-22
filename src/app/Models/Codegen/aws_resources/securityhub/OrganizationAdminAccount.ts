import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationAdminAccountArgs {
  // The AWS account identifier of the account to designate as the Security Hub administrator account.
  adminAccountId?: string;
}
export class OrganizationAdminAccount extends Resource {
  // The AWS account identifier of the account to designate as the Security Hub administrator account.
  public adminAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "adminAccountId",
        "The AWS account identifier of the account to designate as the Security Hub administrator account.",
        [],
        true,
        true,
      ),
    ];
  }
}
