import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CatalogTablePartitionKey {
  // Free-form text comment.
  comment?: string;

  // Name of the Partition Key.
  name?: string;

  // Datatype of data in the Partition Key.
  type?: string;
}

export function glue_CatalogTablePartitionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comment",
      "Free-form text comment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the Partition Key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Datatype of data in the Partition Key.",
      [],
      false,
      false,
    ),
  ];
}
