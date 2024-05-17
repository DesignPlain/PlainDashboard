import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastore_DataStoreIndexProperty,
  Datastore_DataStoreIndexProperty_GetTypes,
} from "../types/Datastore_DataStoreIndexProperty";

export interface DataStoreIndexArgs {
  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  Properties?: Array<Datastore_DataStoreIndexProperty>;

  /*
Policy for including ancestors in the index.
Default value is `NONE`.
Possible values are: `NONE`, `ALL_ANCESTORS`.
*/
  Ancestor?: string;

  /*
The entity kind which the index applies to.


- - -
*/
  Kind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class DataStoreIndex extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  public Properties?: Array<Datastore_DataStoreIndexProperty>;

  /*
Policy for including ancestors in the index.
Default value is `NONE`.
Possible values are: `NONE`, `ALL_ANCESTORS`.
*/
  public Ancestor?: string;

  // The index id.
  public IndexId?: string;

  /*
The entity kind which the index applies to.


- - -
*/
  public Kind?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Ancestor",
        "Policy for including ancestors in the index.\nDefault value is `NONE`.\nPossible values are: `NONE`, `ALL_ANCESTORS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Kind",
        "The entity kind which the index applies to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Properties",
        "An ordered list of properties to index on.\nStructure is documented below.",
        Datastore_DataStoreIndexProperty_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
