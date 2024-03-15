import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiDatasetEncryptionSpec } from "../types/AiDatasetEncryptionSpec";

export interface AiDatasetArgs {
  // The region of the dataset. eg us-central1
  Region?: string;

  // The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  DisplayName?: string;

  /*
Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: AiDatasetEncryptionSpec;

  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.


- - -
*/
  MetadataSchemaUri?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class AiDataset extends Resource {
  // The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  public DisplayName?: string;

  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.


- - -
*/
  public MetadataSchemaUri?: string;

  // The region of the dataset. eg us-central1
  public Region?: string;

  // The timestamp of when the dataset was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The timestamp of when the dataset was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: AiDatasetEncryptionSpec;

  // The resource name of the Dataset. This value is set by Google.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the dataset. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EncryptionSpec",
        "Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to this Workflow.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetadataSchemaUri",
        "Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
