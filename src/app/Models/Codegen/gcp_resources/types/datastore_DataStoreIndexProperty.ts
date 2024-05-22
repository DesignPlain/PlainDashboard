import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastore_DataStoreIndexProperty {
  /*
The direction the index should optimize for sorting.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  direction?: string;

  // The property name to index.
  name?: string;
}

export function datastore_DataStoreIndexProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "direction",
      "The direction the index should optimize for sorting.\nPossible values are: `ASCENDING`, `DESCENDING`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The property name to index.",
      [],
      true,
      true,
    ),
  ];
}
