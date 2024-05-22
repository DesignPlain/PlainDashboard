import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workspaces_getDirectoryWorkspaceAccessProperty {
  // (Optional) Indicates whether users can use Chromebooks to access their WorkSpaces.
  deviceTypeChromeos?: string;

  // (Optional) Indicates whether users can use iOS devices to access their WorkSpaces.
  deviceTypeIos?: string;

  // (Optional) Indicates whether users can use Linux clients to access their WorkSpaces.
  deviceTypeLinux?: string;

  // (Optional) Indicates whether users can use macOS clients to access their WorkSpaces.
  deviceTypeOsx?: string;

  // (Optional) Indicates whether users can access their WorkSpaces through a web browser.
  deviceTypeWeb?: string;

  // (Optional) Indicates whether users can use Windows clients to access their WorkSpaces.
  deviceTypeWindows?: string;

  // (Optional) Indicates whether users can use zero client devices to access their WorkSpaces.
  deviceTypeZeroclient?: string;

  // (Optional) Indicates whether users can use Android devices to access their WorkSpaces.
  deviceTypeAndroid?: string;
}

export function workspaces_getDirectoryWorkspaceAccessProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceTypeIos",
      "(Optional) Indicates whether users can use iOS devices to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeLinux",
      "(Optional) Indicates whether users can use Linux clients to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeOsx",
      "(Optional) Indicates whether users can use macOS clients to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeWeb",
      "(Optional) Indicates whether users can access their WorkSpaces through a web browser.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeWindows",
      "(Optional) Indicates whether users can use Windows clients to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeZeroclient",
      "(Optional) Indicates whether users can use zero client devices to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeAndroid",
      "(Optional) Indicates whether users can use Android devices to access their WorkSpaces.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeChromeos",
      "(Optional) Indicates whether users can use Chromebooks to access their WorkSpaces.",
      [],
      true,
      false,
    ),
  ];
}
