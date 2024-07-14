import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OrganizationAdminAccountRegistrationArgs {
  // Identifier for the organization administrator account.
  adminAccountId?: string;
}
export class OrganizationAdminAccountRegistration extends Resource {
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
        [],
        true,
        false,
      ),
    ];
  }
}
