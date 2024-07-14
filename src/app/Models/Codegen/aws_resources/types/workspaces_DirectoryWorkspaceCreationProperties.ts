import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workspaces_DirectoryWorkspaceCreationProperties {
  // The default organizational unit (OU) for your WorkSpace directories. Should conform `"OU=<value>,DC=<value>,...,DC=<value>"` pattern.
  defaultOu?: string;

  // Indicates whether internet access is enabled for your WorkSpaces.
  enableInternetAccess?: boolean;

  // Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html)..
  enableMaintenanceMode?: boolean;

  // Indicates whether users are local administrators of their WorkSpaces.
  userEnabledAsLocalAdministrator?: boolean;

  // The identifier of your custom security group. Should relate to the same VPC, where workspaces reside in.
  customSecurityGroupId?: string;
}

export function workspaces_DirectoryWorkspaceCreationProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultOu",
      'The default organizational unit (OU) for your WorkSpace directories. Should conform `"OU=<value>,DC=<value>,...,DC=<value>"` pattern.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableInternetAccess",
      "Indicates whether internet access is enabled for your WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableMaintenanceMode",
      "Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html)..",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userEnabledAsLocalAdministrator",
      "Indicates whether users are local administrators of their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customSecurityGroupId",
      "The identifier of your custom security group. Should relate to the same VPC, where workspaces reside in.",
      [],
      false,
      false,
    ),
  ];
}
