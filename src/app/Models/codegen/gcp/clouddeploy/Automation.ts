import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  clouddeploy_AutomationRule,
  clouddeploy_AutomationRule_GetTypes,
} from "../types/clouddeploy_AutomationRule";
import {
  clouddeploy_AutomationSelector,
  clouddeploy_AutomationSelector_GetTypes,
} from "../types/clouddeploy_AutomationSelector";

export interface AutomationArgs {
  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: - Annotations are key/value pairs. - Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). - The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. - The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // The delivery_pipeline for the resource
  deliveryPipeline?: string;

  // Optional. Description of the `Automation`. Max length is 255 characters.
  description?: string;

  // Name of the `Automation`.
  name?: string;

  // Optional. When Suspended, automation is deactivated from execution.
  suspended?: boolean;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
Structure is documented below.
*/
  rules?: Array<clouddeploy_AutomationRule>;

  /*
Required. Selected resources to which the automation will be applied.
Structure is documented below.
*/
  selector?: clouddeploy_AutomationSelector;

  // Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
  serviceAccount?: string;
}
export class Automation extends DS_Resource {
  /*
Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
Structure is documented below.
*/
  public rules?: Array<clouddeploy_AutomationRule>;

  // Output only. Time at which the automation was created.
  public createTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Required. Selected resources to which the automation will be applied.
Structure is documented below.
*/
  public selector?: clouddeploy_AutomationSelector;

  // Output only. Unique identifier of the `Automation`.
  public uid?: string;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: - Annotations are key/value pairs. - Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). - The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. - The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // The delivery_pipeline for the resource
  public deliveryPipeline?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
  public serviceAccount?: string;

  // Optional. When Suspended, automation is deactivated from execution.
  public suspended?: boolean;

  // Output only. Time at which the automation was updated.
  public updateTime?: string;

  // Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // Name of the `Automation`.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Optional. Description of the `Automation`. Max length is 255 characters.
  public description?: string;

  // The location for the resource
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the `Automation`. Max length is 255 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the `Automation`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "suspended",
        "Optional. When Suspended, automation is deactivated from execution.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "selector",
        "Required. Selected resources to which the automation will be applied.\nStructure is documented below.",
        () => clouddeploy_AutomationSelector_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deliveryPipeline",
        "The delivery_pipeline for the resource",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.\nStructure is documented below.",
        () => clouddeploy_AutomationRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
