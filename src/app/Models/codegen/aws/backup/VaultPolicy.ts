import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VaultPolicyArgs {
  // Name of the backup vault to add policy for.
  backupVaultName?: string;

  // The backup vault access policy document in JSON format.
  policy?: string;
}
export class VaultPolicy extends DS_Resource {
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
        "policy",
        "The backup vault access policy document in JSON format.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupVaultName",
        "Name of the backup vault to add policy for.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
