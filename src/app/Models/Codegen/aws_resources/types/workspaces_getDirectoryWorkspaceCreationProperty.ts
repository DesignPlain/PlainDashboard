import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workspaces_getDirectoryWorkspaceCreationProperty {
  // Indicates whether users are local administrators of their WorkSpaces.
  userEnabledAsLocalAdministrator?: boolean;

  // The identifier of your custom security group. Should relate to the same VPC, where workspaces reside in.
  customSecurityGroupId?: string;

  // The default organizational unit (OU) for your WorkSpace directories.
  defaultOu?: string;

  // Indicates whether internet access is enabled for your WorkSpaces.
  enableInternetAccess?: boolean;

  // Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html).
  enableMaintenanceMode?: boolean;
}

export function workspaces_getDirectoryWorkspaceCreationProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableMaintenanceMode",
      "Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userEnabledAsLocalAdministrator",
      "Indicates whether users are local administrators of their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customSecurityGroupId",
      "The identifier of your custom security group. Should relate to the same VPC, where workspaces reside in.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultOu",
      "The default organizational unit (OU) for your WorkSpace directories.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableInternetAccess",
      "Indicates whether internet access is enabled for your WorkSpaces.",
      [],
      true,
      false,
    ),
  ];
}
