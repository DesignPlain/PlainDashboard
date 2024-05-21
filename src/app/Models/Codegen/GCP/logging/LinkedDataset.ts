import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_LinkedDatasetBigqueryDataset,
  logging_LinkedDatasetBigqueryDataset_GetTypes,
} from "../types/logging_LinkedDatasetBigqueryDataset";

export interface LinkedDatasetArgs {
  /*
The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along
with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery
Views corresponding to the LogViews in the bucket.
Structure is documented below.
*/
  bigqueryDatasets?: Array<logging_LinkedDatasetBigqueryDataset>;

  /*
The bucket to which the linked dataset is attached.


- - -
*/
  bucket?: string;

  // Describes this link. The maximum length of the description is 8000 characters.
  description?: string;

  // The id of the linked dataset.
  linkId?: string;

  // The location of the linked dataset.
  location?: string;

  // The parent of the linked dataset.
  parent?: string;
}
export class LinkedDataset extends Resource {
  /*
Output only. The creation timestamp of the link. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z"
and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // Output only. The linked dataset lifecycle state.
  public lifecycleState?: string;

  /*
The resource name of the linked dataset. The name can have up to 100 characters. A valid link id
(at the end of the link name) must only have alphanumeric characters and underscores within it.
*/
  public name?: string;

  // The parent of the linked dataset.
  public parent?: string;

  /*
The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along
with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery
Views corresponding to the LogViews in the bucket.
Structure is documented below.
*/
  public bigqueryDatasets?: Array<logging_LinkedDatasetBigqueryDataset>;

  /*
The bucket to which the linked dataset is attached.


- - -
*/
  public bucket?: string;

  // Describes this link. The maximum length of the description is 8000 characters.
  public description?: string;

  // The id of the linked dataset.
  public linkId?: string;

  // The location of the linked dataset.
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "linkId",
        "The id of the linked dataset.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the linked dataset.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the linked dataset.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "bigqueryDatasets",
        "The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along\nwith it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery\nViews corresponding to the LogViews in the bucket.\nStructure is documented below.",
        logging_LinkedDatasetBigqueryDataset_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The bucket to which the linked dataset is attached.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Describes this link. The maximum length of the description is 8000 characters.",
        [],
        false,
        true,
      ),
    ];
  }
}
