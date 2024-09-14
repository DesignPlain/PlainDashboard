import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface OrganizationAdminAccountArgs {
  // The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
  adminAccountId?: string;
}
export class OrganizationAdminAccount extends DS_Resource {
  // The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
  public adminAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "adminAccountId",
        "The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
