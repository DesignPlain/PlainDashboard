import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CustomTargetTypeCustomActions } from "../types/CustomTargetTypeCustomActions";

export interface CustomTargetTypeArgs {
  /*
User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Configures render and deploy for the `CustomTargetType` using Skaffold custom actions.
Structure is documented below.
*/
  CustomActions?: CustomTargetTypeCustomActions;

  // Description of the `CustomTargetType`. Max length is 255 characters.
  Description?: string;

  /*
Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the source.


- - -
*/
  Location?: string;

  // Name of the `CustomTargetType`.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class CustomTargetType extends Resource {
  // Resource id of the `CustomTargetType`.
  public CustomTargetTypeId?: string;

  /*
The location of the source.


- - -
*/
  public Location?: string;

  // Unique identifier of the `CustomTargetType`.
  public Uid?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Time at which the `CustomTargetType` was updated.
  public UpdateTime?: string;

  /*
User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Description of the `CustomTargetType`. Max length is 255 characters.
  public Description?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The weak etag of the `CustomTargetType` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the `CustomTargetType`.
  public Name?: string;

  // Time at which the `CustomTargetType` was created.
  public CreateTime?: string;

  /*
Configures render and deploy for the `CustomTargetType` using Skaffold custom actions.
Structure is documented below.
*/
  public CustomActions?: CustomTargetTypeCustomActions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the source.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the `CustomTargetType`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomActions",
        "Configures render and deploy for the `CustomTargetType` using Skaffold custom actions.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the `CustomTargetType`. Max length is 255 characters.",
      ),
    ];
  }
}
