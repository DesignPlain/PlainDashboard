import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DataStoreIndexProperty } from "../types/DataStoreIndexProperty";

export interface DataStoreIndexArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  Properties?: Array<DataStoreIndexProperty>;

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
}
export class DataStoreIndex extends Resource {
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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An ordered list of properties to index on.
Structure is documented below.
*/
  public Properties?: Array<DataStoreIndexProperty>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Properties",
        "An ordered list of properties to index on.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Ancestor",
        "Policy for including ancestors in the index.\nDefault value is `NONE`.\nPossible values are: `NONE`, `ALL_ANCESTORS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Kind",
        "The entity kind which the index applies to.\n\n\n- - -",
      ),
    ];
  }
}
