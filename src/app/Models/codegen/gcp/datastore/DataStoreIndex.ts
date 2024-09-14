import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datastore_DataStoreIndexProperty,
  datastore_DataStoreIndexProperty_GetTypes,
} from "../types/datastore_DataStoreIndexProperty";

export interface DataStoreIndexArgs {
  /*
Policy for including ancestors in the index.
Default value is `NONE`.
Possible values are: `NONE`, `ALL_ANCESTORS`.
*/
  ancestor?: string;

  /*
The entity kind which the index applies to.


- - -
*/
  kind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  properties?: Array<datastore_DataStoreIndexProperty>;
}
export class DataStoreIndex extends DS_Resource {
  /*
Policy for including ancestors in the index.
Default value is `NONE`.
Possible values are: `NONE`, `ALL_ANCESTORS`.
*/
  public ancestor?: string;

  // The index id.
  public indexId?: string;

  /*
The entity kind which the index applies to.


- - -
*/
  public kind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  public properties?: Array<datastore_DataStoreIndexProperty>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ancestor",
        "Policy for including ancestors in the index.\nDefault value is `NONE`.\nPossible values are: `NONE`, `ALL_ANCESTORS`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kind",
        "The entity kind which the index applies to.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "properties",
        "An ordered list of properties to index on.\nStructure is documented below.",
        () => datastore_DataStoreIndexProperty_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
