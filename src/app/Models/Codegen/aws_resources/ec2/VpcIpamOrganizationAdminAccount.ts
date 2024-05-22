import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcIpamOrganizationAdminAccountArgs {
  //
  delegatedAdminAccountId?: string;
}
export class VpcIpamOrganizationAdminAccount extends Resource {
  // The Organizations ARN for the delegate account.
  public arn?: string;

  //
  public delegatedAdminAccountId?: string;

  // The Organizations email for the delegate account.
  public email?: string;

  // The Organizations name for the delegate account.
  public name?: string;

  // The AWS service principal.
  public servicePrincipal?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "delegatedAdminAccountId",
        "",
        [],
        true,
        true,
      ),
    ];
  }
}
