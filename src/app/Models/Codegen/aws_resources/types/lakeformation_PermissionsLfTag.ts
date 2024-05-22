import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lakeformation_PermissionsLfTag {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  // The key-name for the tag.
  key?: string;

  /*
A list of possible values an attribute can take.

The following argument is optional:
*/
  values?: Array<string>;
}

export function lakeformation_PermissionsLfTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key-name for the tag.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "A list of possible values an attribute can take.\n\nThe following argument is optional:",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
