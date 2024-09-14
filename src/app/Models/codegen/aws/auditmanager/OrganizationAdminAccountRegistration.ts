import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface OrganizationAdminAccountRegistrationArgs {
  // Identifier for the organization administrator account.
  adminAccountId?: string;
}
export class OrganizationAdminAccountRegistration extends DS_Resource {
  // Identifier for the organization administrator account.
  public adminAccountId?: string;

  // Identifier for the organization.
  public organizationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "adminAccountId",
        "Identifier for the organization administrator account.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
