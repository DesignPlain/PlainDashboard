import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiIndexMetadata } from "../types/AiIndexMetadata";
import { AiIndexDeployedIndex } from "../types/AiIndexDeployedIndex";
import { AiIndexIndexStat } from "../types/AiIndexIndexStat";

export interface AiIndexArgs {
  // The description of the Index.
  Description?: string;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  DisplayName?: string;

  /*
The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
- BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
- STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
*/
  IndexUpdateMethod?: string;

  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
An additional information about the Index
Structure is documented below.
*/
  Metadata?: AiIndexMetadata;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the index. eg us-central1
  Region?: string;
}
export class AiIndex extends Resource {
  /*
The pointers to DeployedIndexes created from this Index. An Index can be only deleted if all its DeployedIndexes had been undeployed first.
Structure is documented below.
*/
  public DeployedIndexes?: Array<AiIndexDeployedIndex>;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the index. eg us-central1
  public Region?: string;

  // The timestamp of when the Index was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // The timestamp of when the Index was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  /*
Stats of the index resource.
Structure is documented below.
*/
  public IndexStats?: Array<AiIndexIndexStat>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
An additional information about the Index
Structure is documented below.
*/
  public Metadata?: AiIndexMetadata;

  // Points to a YAML file stored on Google Cloud Storage describing additional information about the Index, that is specific to it. Unset if the Index does not have any additional information.
  public MetadataSchemaUri?: string;

  // The resource name of the Index.
  public Name?: string;

  // The description of the Index.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  /*
The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
- BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
- STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
*/
  public IndexUpdateMethod?: string;

  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "IndexUpdateMethod",
        "The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.\n* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.\n* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels with user-defined metadata to organize your Indexes.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "An additional information about the Index\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the index. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the Index.",
      ),
    ];
  }
}
