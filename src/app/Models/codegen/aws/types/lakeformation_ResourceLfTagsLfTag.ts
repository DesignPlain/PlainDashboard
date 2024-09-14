import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_ResourceLfTagsLfTag {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  // Key name for an existing LF-tag.
  key?: string;

  /*
Value from the possible values for the LF-tag.

The following argument is optional:
*/
  value?: string;
}

export function lakeformation_ResourceLfTagsLfTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key name for an existing LF-tag.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value from the possible values for the LF-tag.\n\nThe following argument is optional:",
      () => [],
      true,
      true,
    ),
  ];
}
