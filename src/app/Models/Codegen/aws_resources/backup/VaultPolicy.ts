import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VaultPolicyArgs {
  // Name of the backup vault to add policy for.
  backupVaultName?: string;

  // The backup vault access policy document in JSON format.
  policy?: string;
}
export class VaultPolicy extends Resource {
  // The ARN of the vault.
  public backupVaultArn?: string;

  // Name of the backup vault to add policy for.
  public backupVaultName?: string;

  // The backup vault access policy document in JSON format.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "backupVaultName",
        "Name of the backup vault to add policy for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The backup vault access policy document in JSON format.",
        [],
        true,
        false,
      ),
    ];
  }
}
