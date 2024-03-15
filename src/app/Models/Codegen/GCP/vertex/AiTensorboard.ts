import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiTensorboardEncryptionSpec } from "../types/AiTensorboardEncryptionSpec";

export interface AiTensorboardArgs {
  /*
User provided name of this Tensorboard.


- - -
*/
  DisplayName?: string;

  /*
Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: AiTensorboardEncryptionSpec;

  /*
The labels with user-defined metadata to organize your Tensorboards.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the tensorboard. eg us-central1
  Region?: string;

  // Description of this Tensorboard.
  Description?: string;
}
export class AiTensorboard extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: AiTensorboardEncryptionSpec;

  // Name of the Tensorboard.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the tensorboard. eg us-central1
  public Region?: string;

  // The number of Runs stored in this Tensorboard.
  public RunCount?: string;

  // Consumer project Cloud Storage path prefix used to store blob data, which can either be a bucket or directory. Does not end with a '/'.
  public BlobStoragePathPrefix?: string;

  // The timestamp of when the Tensorboard was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // The timestamp of when the Tensorboard was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  /*
The labels with user-defined metadata to organize your Tensorboards.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Description of this Tensorboard.
  public Description?: string;

  /*
User provided name of this Tensorboard.


- - -
*/
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EncryptionSpec",
        "Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels with user-defined metadata to organize your Tensorboards.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the tensorboard. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of this Tensorboard.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User provided name of this Tensorboard.\n\n\n- - -",
      ),
    ];
  }
}
