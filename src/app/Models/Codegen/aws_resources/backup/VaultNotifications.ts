import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VaultNotificationsArgs {
  // The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events
  snsTopicArn?: string;

  // An array of events that indicate the status of jobs to back up resources to the backup vault.
  backupVaultEvents?: Array<string>;

  // Name of the backup vault to add notifications for.
  backupVaultName?: string;
}
export class VaultNotifications extends Resource {
  // The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events
  public snsTopicArn?: string;

  // The ARN of the vault.
  public backupVaultArn?: string;

  // An array of events that indicate the status of jobs to back up resources to the backup vault.
  public backupVaultEvents?: Array<string>;

  // Name of the backup vault to add notifications for.
  public backupVaultName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "backupVaultEvents",
        "An array of events that indicate the status of jobs to back up resources to the backup vault.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupVaultName",
        "Name of the backup vault to add notifications for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snsTopicArn",
        "The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events",
        [],
        true,
        true,
      ),
    ];
  }
}
