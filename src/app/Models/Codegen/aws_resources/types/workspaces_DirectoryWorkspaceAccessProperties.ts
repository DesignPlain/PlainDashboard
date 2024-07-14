import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workspaces_DirectoryWorkspaceAccessProperties {
  // Indicates whether users can use macOS clients to access their WorkSpaces.
  deviceTypeOsx?: string;

  // Indicates whether users can access their WorkSpaces through a web browser.
  deviceTypeWeb?: string;

  // Indicates whether users can use Windows clients to access their WorkSpaces.
  deviceTypeWindows?: string;

  // Indicates whether users can use zero client devices to access their WorkSpaces.
  deviceTypeZeroclient?: string;

  // Indicates whether users can use Android devices to access their WorkSpaces.
  deviceTypeAndroid?: string;

  // Indicates whether users can use Chromebooks to access their WorkSpaces.
  deviceTypeChromeos?: string;

  // Indicates whether users can use iOS devices to access their WorkSpaces.
  deviceTypeIos?: string;

  // Indicates whether users can use Linux clients to access their WorkSpaces.
  deviceTypeLinux?: string;
}

export function workspaces_DirectoryWorkspaceAccessProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceTypeIos",
      "Indicates whether users can use iOS devices to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeLinux",
      "Indicates whether users can use Linux clients to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeOsx",
      "Indicates whether users can use macOS clients to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeWeb",
      "Indicates whether users can access their WorkSpaces through a web browser.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeWindows",
      "Indicates whether users can use Windows clients to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeZeroclient",
      "Indicates whether users can use zero client devices to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeAndroid",
      "Indicates whether users can use Android devices to access their WorkSpaces.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceTypeChromeos",
      "Indicates whether users can use Chromebooks to access their WorkSpaces.",
      [],
      false,
      false,
    ),
  ];
}
