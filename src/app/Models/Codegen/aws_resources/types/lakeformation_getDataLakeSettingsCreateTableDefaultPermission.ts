import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lakeformation_getDataLakeSettingsCreateTableDefaultPermission {
  // List of permissions granted to the principal.
  permissions?: Array<string>;

  // Principal who is granted permissions.
  principal?: string;
}

export function lakeformation_getDataLakeSettingsCreateTableDefaultPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "principal",
      "Principal who is granted permissions.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "List of permissions granted to the principal.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
