import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workspaces_DirectorySelfServicePermissions,
  workspaces_DirectorySelfServicePermissions_GetTypes,
} from "../types/workspaces_DirectorySelfServicePermissions";
import {
  workspaces_DirectoryWorkspaceAccessProperties,
  workspaces_DirectoryWorkspaceAccessProperties_GetTypes,
} from "../types/workspaces_DirectoryWorkspaceAccessProperties";
import {
  workspaces_DirectoryWorkspaceCreationProperties,
  workspaces_DirectoryWorkspaceCreationProperties_GetTypes,
} from "../types/workspaces_DirectoryWorkspaceCreationProperties";

export interface DirectoryArgs {
  // The identifiers of the IP access control groups associated with the directory.
  ipGroupIds?: Array<string>;

  // Permissions to enable or disable self-service capabilities. Defined below.
  selfServicePermissions?: workspaces_DirectorySelfServicePermissions;

  // The identifiers of the subnets where the directory resides.
  subnetIds?: Array<string>;

  // A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies which devices and operating systems users can use to access their WorkSpaces. Defined below.
  workspaceAccessProperties?: workspaces_DirectoryWorkspaceAccessProperties;

  // Default properties that are used for creating WorkSpaces. Defined below.
  workspaceCreationProperties?: workspaces_DirectoryWorkspaceCreationProperties;

  // The directory identifier for registration in WorkSpaces service.
  directoryId?: string;
}
export class Directory extends Resource {
  // The directory identifier for registration in WorkSpaces service.
  public directoryId?: string;

  // The IP addresses of the DNS servers for the directory.
  public dnsIpAddresses?: Array<string>;

  // The identifiers of the IP access control groups associated with the directory.
  public ipGroupIds?: Array<string>;

  // A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
  public iamRoleId?: string;

  // The identifier of the security group that is assigned to new WorkSpaces.
  public workspaceSecurityGroupId?: string;

  // The directory type.
  public directoryType?: string;

  // The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
  public registrationCode?: string;

  // Permissions to enable or disable self-service capabilities. Defined below.
  public selfServicePermissions?: workspaces_DirectorySelfServicePermissions;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies which devices and operating systems users can use to access their WorkSpaces. Defined below.
  public workspaceAccessProperties?: workspaces_DirectoryWorkspaceAccessProperties;

  // The directory alias.
  public alias?: string;

  // The user name for the service account.
  public customerUserName?: string;

  // The name of the directory.
  public directoryName?: string;

  // The identifiers of the subnets where the directory resides.
  public subnetIds?: Array<string>;

  // Default properties that are used for creating WorkSpaces. Defined below.
  public workspaceCreationProperties?: workspaces_DirectoryWorkspaceCreationProperties;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ipGroupIds",
        "The identifiers of the IP access control groups associated with the directory.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "selfServicePermissions",
        "Permissions to enable or disable self-service capabilities. Defined below.",
        workspaces_DirectorySelfServicePermissions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "The identifiers of the subnets where the directory resides.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags assigned to the WorkSpaces directory. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workspaceAccessProperties",
        "Specifies which devices and operating systems users can use to access their WorkSpaces. Defined below.",
        workspaces_DirectoryWorkspaceAccessProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workspaceCreationProperties",
        "Default properties that are used for creating WorkSpaces. Defined below.",
        workspaces_DirectoryWorkspaceCreationProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The directory identifier for registration in WorkSpaces service.",
        [],
        true,
        true,
      ),
    ];
  }
}
