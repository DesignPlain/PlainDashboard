import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccountRegistrationArgs {
  // Identifier for the delegated administrator account.
  delegatedAdminAccount?: string;

  // Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).
  deregisterOnDestroy?: boolean;

  // KMS key identifier.
  kmsKey?: string;
}
export class AccountRegistration extends DS_Resource {
  // KMS key identifier.
  public kmsKey?: string;

  // Status of the account registration request.
  public status?: string;

  // Identifier for the delegated administrator account.
  public delegatedAdminAccount?: string;

  // Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).
  public deregisterOnDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "delegatedAdminAccount",
        "Identifier for the delegated administrator account.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deregisterOnDestroy",
        "Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKey",
        "KMS key identifier.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
