import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iam_getTestablePermissionsPermission {
  // Whether the corresponding API has been enabled for the resource.
  apiDisabled?: boolean;

  // The level of support for custom roles. Can be one of `"NOT_SUPPORTED"`, `"SUPPORTED"`, `"TESTING"`. Default is `"SUPPORTED"`
  customSupportLevel?: string;

  // Name of the permission.
  name?: string;

  // Release stage of the permission.
  stage?: string;

  // Human readable title of the permission.
  title?: string;
}

export function iam_getTestablePermissionsPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the permission.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stage",
      "Release stage of the permission.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Human readable title of the permission.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "apiDisabled",
      "Whether the corresponding API has been enabled for the resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customSupportLevel",
      'The level of support for custom roles. Can be one of `"NOT_SUPPORTED"`, `"SUPPORTED"`, `"TESTING"`. Default is `"SUPPORTED"`',
      [],
      true,
      false,
    ),
  ];
}
