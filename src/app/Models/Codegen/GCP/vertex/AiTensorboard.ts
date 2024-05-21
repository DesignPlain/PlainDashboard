import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiTensorboardEncryptionSpec,
  vertex_AiTensorboardEncryptionSpec_GetTypes,
} from "../types/vertex_AiTensorboardEncryptionSpec";

export interface AiTensorboardArgs {
  // Description of this Tensorboard.
  description?: string;

  /*
User provided name of this Tensorboard.


- - -
*/
  displayName?: string;

  /*
Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.
Structure is documented below.
*/
  encryptionSpec?: vertex_AiTensorboardEncryptionSpec;

  /*
The labels with user-defined metadata to organize your Tensorboards.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the tensorboard. eg us-central1
  region?: string;
}
export class AiTensorboard extends Resource {
  // Description of this Tensorboard.
  public description?: string;

  /*
User provided name of this Tensorboard.


- - -
*/
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.
Structure is documented below.
*/
  public encryptionSpec?: vertex_AiTensorboardEncryptionSpec;

  /*
The labels with user-defined metadata to organize your Tensorboards.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the Tensorboard.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Consumer project Cloud Storage path prefix used to store blob data, which can either be a bucket or directory. Does not end with a '/'.
  public blobStoragePathPrefix?: string;

  // The number of Runs stored in this Tensorboard.
  public runCount?: string;

  // The timestamp of when the Tensorboard was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // The region of the tensorboard. eg us-central1
  public region?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The timestamp of when the Tensorboard was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of this Tensorboard.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User provided name of this Tensorboard.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionSpec",
        "Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.\nStructure is documented below.",
        vertex_AiTensorboardEncryptionSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The labels with user-defined metadata to organize your Tensorboards.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the tensorboard. eg us-central1",
        [],
        false,
        true,
      ),
    ];
  }
}
