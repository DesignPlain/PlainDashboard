import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineCondition,
  clouddeploy_DeliveryPipelineCondition_GetTypes,
} from "../types/clouddeploy_DeliveryPipelineCondition";
import {
  clouddeploy_DeliveryPipelineSerialPipeline,
  clouddeploy_DeliveryPipelineSerialPipeline_GetTypes,
} from "../types/clouddeploy_DeliveryPipelineSerialPipeline";

export interface DeliveryPipelineArgs {
  /*
Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  name?: string;

  // The project for the resource
  project?: string;

  // SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
  serialPipeline?: clouddeploy_DeliveryPipelineSerialPipeline;

  // When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  suspended?: boolean;

  /*
User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Description of the `DeliveryPipeline`. Max length is 255 characters.
  description?: string;
}
export class DeliveryPipeline extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // The project for the resource
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
  public serialPipeline?: clouddeploy_DeliveryPipelineSerialPipeline;

  // Output only. Unique identifier of the `DeliveryPipeline`.
  public uid?: string;

  // Output only. Time at which the pipeline was created.
  public createTime?: string;

  // Description of the `DeliveryPipeline`. Max length is 255 characters.
  public description?: string;

  /*
Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  public name?: string;

  // When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  public suspended?: boolean;

  // Output only. Information around the state of the Delivery Pipeline.
  public conditions?: Array<clouddeploy_DeliveryPipelineCondition>;

  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  /*
User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Output only. Most recent time at which the pipeline was updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\\-]{0,62}.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serialPipeline",
        "SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.",
        clouddeploy_DeliveryPipelineSerialPipeline_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "suspended",
        "When suspended, no new releases or rollouts can be created, but in-progress ones will complete.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the `DeliveryPipeline`. Max length is 255 characters.",
        [],
        false,
        false,
      ),
    ];
  }
}
