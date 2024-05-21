import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  healthcare_Hl7StoreNotificationConfig,
  healthcare_Hl7StoreNotificationConfig_GetTypes,
} from "../types/healthcare_Hl7StoreNotificationConfig";
import {
  healthcare_Hl7StoreNotificationConfigs,
  healthcare_Hl7StoreNotificationConfigs_GetTypes,
} from "../types/healthcare_Hl7StoreNotificationConfigs";
import {
  healthcare_Hl7StoreParserConfig,
  healthcare_Hl7StoreParserConfig_GetTypes,
} from "../types/healthcare_Hl7StoreParserConfig";

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
  labels?: Map<string, string>;

  /*
The resource name for the Hl7V2Store.
-- Changing this property may recreate the Hl7v2 store (removing all data) --
*/
  name?: string;

  /*
(Optional, Deprecated)
A nested object resource
Structure is documented below.

> --Warning:-- `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.
*/
  notificationConfig?: healthcare_Hl7StoreNotificationConfig;

  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  notificationConfigs?: Array<healthcare_Hl7StoreNotificationConfigs>;

  /*
A nested object resource
Structure is documented below.
*/
  parserConfig?: healthcare_Hl7StoreParserConfig;

  // Determines whether duplicate messages are allowed.
  rejectDuplicateMessage?: boolean;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  dataset?: string;
}
export class Hl7Store extends Resource {
  /*
A list of notification configs. Each configuration uses a filter to determine whether to publish a
message (both Ingest & Create) on the corresponding notification destination. Only the message name
is sent as part of the notification. Supplied by the client.
Structure is documented below.
*/
  public notificationConfigs?: Array<healthcare_Hl7StoreNotificationConfigs>;

  // Determines whether duplicate messages are allowed.
  public rejectDuplicateMessage?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
(Optional, Deprecated)
A nested object resource
Structure is documented below.

> --Warning:-- `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.
*/
  public notificationConfig?: healthcare_Hl7StoreNotificationConfig;

  /*
The resource name for the Hl7V2Store.
-- Changing this property may recreate the Hl7v2 store (removing all data) --
*/
  public name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public parserConfig?: healthcare_Hl7StoreParserConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The fully qualified name of this dataset
  public selfLink?: string;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public dataset?: string;

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
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "rejectDuplicateMessage",
        "Determines whether duplicate messages are allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'User-supplied key-value pairs used to organize HL7v2 stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for the Hl7V2Store.\n** Changing this property may recreate the Hl7v2 store (removing all data) **",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationConfig",
        "(Optional, Deprecated)\nA nested object resource\nStructure is documented below.\n\n> **Warning:** `notification_config` is deprecated and will be removed in a future major release. Use `notification_configs` instead.",
        healthcare_Hl7StoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationConfigs",
        "A list of notification configs. Each configuration uses a filter to determine whether to publish a\nmessage (both Ingest & Create) on the corresponding notification destination. Only the message name\nis sent as part of the notification. Supplied by the client.\nStructure is documented below.",
        healthcare_Hl7StoreNotificationConfigs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "parserConfig",
        "A nested object resource\nStructure is documented below.",
        healthcare_Hl7StoreParserConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
