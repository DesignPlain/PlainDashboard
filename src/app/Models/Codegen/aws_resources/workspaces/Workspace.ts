import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workspaces_WorkspaceWorkspaceProperties,
  workspaces_WorkspaceWorkspaceProperties_GetTypes,
} from "../types/workspaces_WorkspaceWorkspaceProperties";

export interface WorkspaceArgs {
  // The user name of the user for the WorkSpace. This user name must exist in the directory for the WorkSpace.
  userName?: string;

  // Indicates whether the data stored on the user volume is encrypted.
  userVolumeEncryptionEnabled?: boolean;

  // The ARN of a symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric CMKs.
  volumeEncryptionKey?: string;

  // The WorkSpace properties.
  workspaceProperties?: workspaces_WorkspaceWorkspaceProperties;

  // The ID of the bundle for the WorkSpace.
  bundleId?: string;

  // The ID of the directory for the WorkSpace.
  directoryId?: string;

  // Indicates whether the data stored on the root volume is encrypted.
  rootVolumeEncryptionEnabled?: boolean;

  // The tags for the WorkSpace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Workspace extends Resource {
  // The ARN of a symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric CMKs.
  public volumeEncryptionKey?: string;

  // The WorkSpace properties.
  public workspaceProperties?: workspaces_WorkspaceWorkspaceProperties;

  // The ID of the bundle for the WorkSpace.
  public bundleId?: string;

  // The name of the WorkSpace, as seen by the operating system.
  public computerName?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The user name of the user for the WorkSpace. This user name must exist in the directory for the WorkSpace.
  public userName?: string;

  // Indicates whether the data stored on the user volume is encrypted.
  public userVolumeEncryptionEnabled?: boolean;

  // The ID of the directory for the WorkSpace.
  public directoryId?: string;

  // The IP address of the WorkSpace.
  public ipAddress?: string;

  // Indicates whether the data stored on the root volume is encrypted.
  public rootVolumeEncryptionEnabled?: boolean;

  // The operational state of the WorkSpace.
  public state?: string;

  // The tags for the WorkSpace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "userVolumeEncryptionEnabled",
        "Indicates whether the data stored on the user volume is encrypted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeEncryptionKey",
        "The ARN of a symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric CMKs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workspaceProperties",
        "The WorkSpace properties.",
        workspaces_WorkspaceWorkspaceProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bundleId",
        "The ID of the bundle for the WorkSpace.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The ID of the directory for the WorkSpace.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "rootVolumeEncryptionEnabled",
        "Indicates whether the data stored on the root volume is encrypted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "The tags for the WorkSpace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The user name of the user for the WorkSpace. This user name must exist in the directory for the WorkSpace.",
        [],
        true,
        true,
      ),
    ];
  }
}
