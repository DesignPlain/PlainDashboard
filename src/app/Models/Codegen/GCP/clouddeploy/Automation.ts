import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AutomationSelector } from "../types/AutomationSelector";
import { AutomationRule } from "../types/AutomationRule";

export interface AutomationArgs {
  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: - Annotations are key/value pairs. - Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). - The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. - The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // The delivery_pipeline for the resource
  DeliveryPipeline?: string;

  // The location for the resource
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Required. Selected resources to which the automation will be applied.
Structure is documented below.
*/
  Selector?: AutomationSelector;

  // Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
  ServiceAccount?: string;

  // Optional. When Suspended, automation is deactivated from execution.
  Suspended?: boolean;

  // Optional. Description of the `Automation`. Max length is 255 characters.
  Description?: string;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the `Automation`.
  Name?: string;

  /*
Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
Structure is documented below.
*/
  Rules?: Array<AutomationRule>;
}
export class Automation extends Resource {
  // Output only. Time at which the automation was updated.
  public UpdateTime?: string;

  // Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
Structure is documented below.
*/
  public Rules?: Array<AutomationRule>;

  /*
Required. Selected resources to which the automation will be applied.
Structure is documented below.
*/
  public Selector?: AutomationSelector;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
  public ServiceAccount?: string;

  // Optional. Description of the `Automation`. Max length is 255 characters.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Name of the `Automation`.
  public Name?: string;

  // The delivery_pipeline for the resource
  public DeliveryPipeline?: string;

  // The location for the resource
  public Location?: string;

  // Output only. Unique identifier of the `Automation`.
  public Uid?: string;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Optional. When Suspended, automation is deactivated from execution.
  public Suspended?: boolean;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: - Annotations are key/value pairs. - Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). - The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. - The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Time at which the automation was created.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeliveryPipeline",
        "The delivery_pipeline for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Selector",
        "Required. Selected resources to which the automation will be applied.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the `Automation`. Max length is 255 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Rules",
        "Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Suspended",
        "Optional. When Suspended, automation is deactivated from execution.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the `Automation`."),
    ];
  }
}
