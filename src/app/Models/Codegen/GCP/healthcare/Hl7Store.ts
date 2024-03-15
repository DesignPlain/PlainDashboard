import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { Hl7StoreNotificationConfig } from "../types/Hl7StoreNotificationConfig";
import { Hl7StoreNotificationConfigs } from "../types/Hl7StoreNotificationConfigs";
import { Hl7StoreParserConfig } from "../types/Hl7StoreParserConfig";

export interface Hl7StoreArgs {
  /*
User-supplied key-value pairs used to organize HL7v2 stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The resource name for the Hl7V2Store.
-- Changing this property may recreate the Hl7v2 store (removing all data) --
*/
  Name?: string;

  /*
(Optional, Deprecated)
A nested object resource
Structure is documented below.

> --Warning:-- `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.
*/
  NotificationConfig?: Hl7StoreNotificationConfig;

  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  NotificationConfigs?: Array<Hl7StoreNotificationConfigs>;

  /*
A nested object resource
Structure is documented below.
*/
  ParserConfig?: Hl7StoreParserConfig;

  // Determines whether duplicate messages are allowed.
  RejectDuplicateMessage?: boolean;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  Dataset?: string;
}
export class Hl7Store extends Resource {
  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public Dataset?: string;

  /*
User-supplied key-value pairs used to organize HL7v2 stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
(Optional, Deprecated)
A nested object resource
Structure is documented below.

> --Warning:-- `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.
*/
  public NotificationConfig?: Hl7StoreNotificationConfig;

  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  public NotificationConfigs?: Array<Hl7StoreNotificationConfigs>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Determines whether duplicate messages are allowed.
  public RejectDuplicateMessage?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The resource name for the Hl7V2Store.
-- Changing this property may recreate the Hl7v2 store (removing all data) --
*/
  public Name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public ParserConfig?: Hl7StoreParserConfig;

  // The fully qualified name of this dataset
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "NotificationConfigs",
        "A list of notification configs. Each configuration uses a filter to determine whether to publish a\nmessage (both Ingest & Create) on the corresponding notification destination. Only the message name\nis sent as part of the notification. Supplied by the client.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ParserConfig",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RejectDuplicateMessage",
        "Determines whether duplicate messages are allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'User-supplied key-value pairs used to organize HL7v2 stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the Hl7V2Store.\n** Changing this property may recreate the Hl7v2 store (removing all data) **",
      ),
      new DynamicUIProps(
        InputType.String,
        "NotificationConfig",
        "(Optional, Deprecated)\nA nested object resource\nStructure is documented below.\n\n> **Warning:** `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.",
      ),
    ];
  }
}
