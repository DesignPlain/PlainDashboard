import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_Hl7StoreNotificationConfig,
  Healthcare_Hl7StoreNotificationConfig_GetTypes,
} from "../types/Healthcare_Hl7StoreNotificationConfig";
import {
  Healthcare_Hl7StoreNotificationConfigs,
  Healthcare_Hl7StoreNotificationConfigs_GetTypes,
} from "../types/Healthcare_Hl7StoreNotificationConfigs";
import {
  Healthcare_Hl7StoreParserConfig,
  Healthcare_Hl7StoreParserConfig_GetTypes,
} from "../types/Healthcare_Hl7StoreParserConfig";

export interface Hl7StoreArgs {
  // Determines whether duplicate messages are allowed.
  RejectDuplicateMessage?: boolean;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  Dataset?: string;

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
  NotificationConfig?: Healthcare_Hl7StoreNotificationConfig;

  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  NotificationConfigs?: Array<Healthcare_Hl7StoreNotificationConfigs>;

  /*
A nested object resource
Structure is documented below.
*/
  ParserConfig?: Healthcare_Hl7StoreParserConfig;
}
export class Hl7Store extends Resource {
  // Determines whether duplicate messages are allowed.
  public RejectDuplicateMessage?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

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
The resource name for the Hl7V2Store.
-- Changing this property may recreate the Hl7v2 store (removing all data) --
*/
  public Name?: string;

  /*
(Optional, Deprecated)
A nested object resource
Structure is documented below.

> --Warning:-- `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.
*/
  public NotificationConfig?: Healthcare_Hl7StoreNotificationConfig;

  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  public NotificationConfigs?: Array<Healthcare_Hl7StoreNotificationConfigs>;

  /*
A nested object resource
Structure is documented below.
*/
  public ParserConfig?: Healthcare_Hl7StoreParserConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The fully qualified name of this dataset
  public SelfLink?: string;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public Dataset?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ParserConfig",
        "A nested object resource\nStructure is documented below.",
        Healthcare_Hl7StoreParserConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RejectDuplicateMessage",
        "Determines whether duplicate messages are allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'User-supplied key-value pairs used to organize HL7v2 stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the Hl7V2Store.\n** Changing this property may recreate the Hl7v2 store (removing all data) **",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NotificationConfig",
        "(Optional, Deprecated)\nA nested object resource\nStructure is documented below.\n\n> **Warning:** `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.",
        Healthcare_Hl7StoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NotificationConfigs",
        "A list of notification configs. Each configuration uses a filter to determine whether to publish a\nmessage (both Ingest & Create) on the corresponding notification destination. Only the message name\nis sent as part of the notification. Supplied by the client.\nStructure is documented below.",
        Healthcare_Hl7StoreNotificationConfigs_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
