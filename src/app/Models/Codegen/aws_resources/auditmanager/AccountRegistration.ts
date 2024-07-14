import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AccountRegistrationArgs {
  // Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).
  deregisterOnDestroy?: boolean;

  // KMS key identifier.
  kmsKey?: string;

  // Identifier for the delegated administrator account.
  delegatedAdminAccount?: string;
}
export class AccountRegistration extends Resource {
  // Identifier for the delegated administrator account.
  public delegatedAdminAccount?: string;

  // Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).
  public deregisterOnDestroy?: boolean;

  // KMS key identifier.
  public kmsKey?: string;

  // Status of the account registration request.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "deregisterOnDestroy",
        "Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKey",
        "KMS key identifier.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "delegatedAdminAccount",
        "Identifier for the delegated administrator account.",
        [],
        false,
        false,
      ),
    ];
  }
}
