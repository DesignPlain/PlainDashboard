import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VaultArgs {
  // Metadata that you can assign to help organize the resources that you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A boolean that indicates that all recovery points stored in the vault are deleted so that the vault can be destroyed without error.
  forceDestroy?: boolean;

  // The server-side encryption key that is used to protect your backups.
  kmsKeyArn?: string;

  // Name of the backup vault to create.
  name?: string;
}
export class Vault extends Resource {
  // Metadata that you can assign to help organize the resources that you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the vault.
  public arn?: string;

  // A boolean that indicates that all recovery points stored in the vault are deleted so that the vault can be destroyed without error.
  public forceDestroy?: boolean;

  // The server-side encryption key that is used to protect your backups.
  public kmsKeyArn?: string;

  // Name of the backup vault to create.
  public name?: string;

  // The number of recovery points that are stored in a backup vault.
  public recoveryPoints?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "The server-side encryption key that is used to protect your backups.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the backup vault to create.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Metadata that you can assign to help organize the resources that you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "A boolean that indicates that all recovery points stored in the vault are deleted so that the vault can be destroyed without error.",
        [],
        false,
        false,
      ),
    ];
  }
}
