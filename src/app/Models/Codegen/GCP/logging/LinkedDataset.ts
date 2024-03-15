import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { LinkedDatasetBigqueryDataset } from "../types/LinkedDatasetBigqueryDataset";

export interface LinkedDatasetArgs {
  // The location of the linked dataset.
  Location?: string;

  // The parent of the linked dataset.
  Parent?: string;

  /*
The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along
with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery
Views corresponding to the LogViews in the bucket.
Structure is documented below.
*/
  BigqueryDatasets?: Array<LinkedDatasetBigqueryDataset>;

  /*
The bucket to which the linked dataset is attached.


- - -
*/
  Bucket?: string;

  // Describes this link. The maximum length of the description is 8000 characters.
  Description?: string;

  // The id of the linked dataset.
  LinkId?: string;
}
export class LinkedDataset extends Resource {
  /*
The bucket to which the linked dataset is attached.


- - -
*/
  public Bucket?: string;

  /*
Output only. The creation timestamp of the link. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z"
and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // Output only. The linked dataset lifecycle state.
  public LifecycleState?: string;

  // The location of the linked dataset.
  public Location?: string;

  /*
The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along
with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery
Views corresponding to the LogViews in the bucket.
Structure is documented below.
*/
  public BigqueryDatasets?: Array<LinkedDatasetBigqueryDataset>;

  // The id of the linked dataset.
  public LinkId?: string;

  /*
The resource name of the linked dataset. The name can have up to 100 characters. A valid link id
(at the end of the link name) must only have alphanumeric characters and underscores within it.
*/
  public Name?: string;

  // The parent of the linked dataset.
  public Parent?: string;

  // Describes this link. The maximum length of the description is 8000 characters.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the linked dataset.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the linked dataset.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "BigqueryDatasets",
        "The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along\nwith it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery\nViews corresponding to the LogViews in the bucket.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The bucket to which the linked dataset is attached.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Describes this link. The maximum length of the description is 8000 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkId",
        "The id of the linked dataset.",
      ),
    ];
  }
}
