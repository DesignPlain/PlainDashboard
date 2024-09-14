import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal,
  glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal_GetTypes,
} from "./glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal";

export interface glue_CatalogDatabaseCreateTableDefaultPermission {
  // The principal who is granted permissions.. See `principal` below.
  principal?: glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal;

  // The permissions that are granted to the principal.
  permissions?: Array<string>;
}

export function glue_CatalogDatabaseCreateTableDefaultPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "principal",
      "The principal who is granted permissions.. See `principal` below.",
      () =>
        glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "The permissions that are granted to the principal.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
