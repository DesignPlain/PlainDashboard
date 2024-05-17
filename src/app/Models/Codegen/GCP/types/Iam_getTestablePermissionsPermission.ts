import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iam_getTestablePermissionsPermission {
  // Whether the corresponding API has been enabled for the resource.
  ApiDisabled?: boolean;

  // The level of support for custom roles. Can be one of `"NOT_SUPPORTED"`, `"SUPPORTED"`, `"TESTING"`. Default is `"SUPPORTED"`
  CustomSupportLevel?: string;

  // Name of the permission.
  Name?: string;

  // Release stage of the permission.
  Stage?: string;

  // Human readable title of the permission.
  Title?: string;
}

export function Iam_getTestablePermissionsPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ApiDisabled",
      "Whether the corresponding API has been enabled for the resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CustomSupportLevel",
      'The level of support for custom roles. Can be one of `"NOT_SUPPORTED"`, `"SUPPORTED"`, `"TESTING"`. Default is `"SUPPORTED"`',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the permission.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Stage",
      "Release stage of the permission.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Title",
      "Human readable title of the permission.",
      [],
      true,
      false,
    ),
  ];
}
