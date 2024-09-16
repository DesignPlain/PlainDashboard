import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VaultLockConfigurationArgs {
  // Name of the backup vault to add a lock configuration for.
  backupVaultName?: string;

  // The number of days before the lock date. If omitted creates a vault lock in `governance` mode, otherwise it will create a vault lock in `compliance` mode.
  changeableForDays?: number;

  // The maximum retention period that the vault retains its recovery points.
  maxRetentionDays?: number;

  // The minimum retention period that the vault retains its recovery points.
  minRetentionDays?: number;
}
export class VaultLockConfiguration extends DS_Resource {
  // The ARN of the vault.
  public backupVaultArn?: string;

  // Name of the backup vault to add a lock configuration for.
  public backupVaultName?: string;

  // The number of days before the lock date. If omitted creates a vault lock in `governance` mode, otherwise it will create a vault lock in `compliance` mode.
  public changeableForDays?: number;

  // The maximum retention period that the vault retains its recovery points.
  public maxRetentionDays?: number;

  // The minimum retention period that the vault retains its recovery points.
  public minRetentionDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'backupVaultName',
        'Name of the backup vault to add a lock configuration for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'changeableForDays',
        'The number of days before the lock date. If omitted creates a vault lock in `governance` mode, otherwise it will create a vault lock in `compliance` mode.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxRetentionDays',
        'The maximum retention period that the vault retains its recovery points.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minRetentionDays',
        'The minimum retention period that the vault retains its recovery points.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
