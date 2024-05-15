import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastore_DataStoreIndexProperty {
  /*
The direction the index should optimize for sorting.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  Direction?: string;

  // The property name to index.
  Name?: string;
}

export function Datastore_DataStoreIndexProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Direction",
      "The direction the index should optimize for sorting.\nPossible values are: `ASCENDING`, `DESCENDING`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The property name to index.",
      [],
      true,
      true,
    ),
  ];
}
