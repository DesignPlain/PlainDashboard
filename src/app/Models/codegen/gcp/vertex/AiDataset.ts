import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vertex_AiDatasetEncryptionSpec,
  vertex_AiDatasetEncryptionSpec_GetTypes,
} from "../types/vertex_AiDatasetEncryptionSpec";

export interface AiDatasetArgs {
  /*
Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.


- - -
*/
  metadataSchemaUri?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the dataset. eg us-central1
  region?: string;

  // The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  displayName?: string;

  /*
Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.
Structure is documented below.
*/
  encryptionSpec?: vertex_AiDatasetEncryptionSpec;

  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class AiDataset extends DS_Resource {
  // The timestamp of when the dataset was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  public displayName?: string;

  /*
Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.


- - -
*/
  public metadataSchemaUri?: string;

  // The resource name of the Dataset. This value is set by Google.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.
Structure is documented below.
*/
  public encryptionSpec?: vertex_AiDatasetEncryptionSpec;

  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The region of the dataset. eg us-central1
  public region?: string;

  // The timestamp of when the dataset was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the dataset. eg us-central1",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionSpec",
        "Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.\nStructure is documented below.",
        () => vertex_AiDatasetEncryptionSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this Workflow.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataSchemaUri",
        "Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
