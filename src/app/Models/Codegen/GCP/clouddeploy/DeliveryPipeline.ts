import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DeliveryPipelineSerialPipeline } from "../types/DeliveryPipelineSerialPipeline";
import { DeliveryPipelineCondition } from "../types/DeliveryPipelineCondition";

export interface DeliveryPipelineArgs {
  // Description of the `DeliveryPipeline`. Max length is 255 characters.
  Description?: string;

  /*
Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  Name?: string;

  // The project for the resource
  Project?: string;

  // SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
  SerialPipeline?: DeliveryPipelineSerialPipeline;

  // When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  Suspended?: boolean;

  /*
User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;
}
export class DeliveryPipeline extends Resource {
  // Output only. Information around the state of the Delivery Pipeline.
  public Conditions?: Array<DeliveryPipelineCondition>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The project for the resource
  public Project?: string;

  // SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
  public SerialPipeline?: DeliveryPipelineSerialPipeline;

  // Output only. Time at which the pipeline was created.
  public CreateTime?: string;

  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  public Suspended?: boolean;

  // Description of the `DeliveryPipeline`. Max length is 255 characters.
  public Description?: string;

  // The location for the resource
  public Location?: string;

  // Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  public Name?: string;

  // Output only. Unique identifier of the `DeliveryPipeline`.
  public Uid?: string;

  /*
User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Most recent time at which the pipeline was updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\\-]{0,62}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "SerialPipeline",
        "SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Suspended",
        "When suspended, no new releases or rollouts can be created, but in-progress ones will complete.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the `DeliveryPipeline`. Max length is 255 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
    ];
  }
}
