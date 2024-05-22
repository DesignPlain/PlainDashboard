import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lakeformation_getDataLakeSettingsCreateDatabaseDefaultPermission {
  // List of permissions granted to the principal.
  permissions?: Array<string>;

  // Principal who is granted permissions.
  principal?: string;
}

export function lakeformation_getDataLakeSettingsCreateDatabaseDefaultPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "List of permissions granted to the principal.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principal",
      "Principal who is granted permissions.",
      [],
      true,
      false,
    ),
  ];
}
