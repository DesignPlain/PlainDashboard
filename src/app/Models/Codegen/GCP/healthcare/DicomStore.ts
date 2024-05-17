import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_DicomStoreNotificationConfig,
  Healthcare_DicomStoreNotificationConfig_GetTypes,
} from "../types/Healthcare_DicomStoreNotificationConfig";
import {
  Healthcare_DicomStoreStreamConfig,
  Healthcare_DicomStoreStreamConfig_GetTypes,
} from "../types/Healthcare_DicomStoreStreamConfig";

export interface DicomStoreArgs {
  /*
To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.
streamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.
Structure is documented below.
*/
  StreamConfigs?: Array<Healthcare_DicomStoreStreamConfig>;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  Dataset?: string;

  /*
User-supplied key-value pairs used to organize DICOM stores.
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
The resource name for the DicomStore.
-- Changing this property may recreate the Dicom store (removing all data) --
*/
  Name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  NotificationConfig?: Healthcare_DicomStoreNotificationConfig;
}
export class DicomStore extends Resource {
  /*
The resource name for the DicomStore.
-- Changing this property may recreate the Dicom store (removing all data) --
*/
  public Name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public NotificationConfig?: Healthcare_DicomStoreNotificationConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The fully qualified name of this dataset
  public SelfLink?: string;

  /*
To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.
streamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.
Structure is documented below.
*/
  public StreamConfigs?: Array<Healthcare_DicomStoreStreamConfig>;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public Dataset?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
User-supplied key-value pairs used to organize DICOM stores.
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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "NotificationConfig",
        "A nested object resource\nStructure is documented below.",
        Healthcare_DicomStoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "StreamConfigs",
        "To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.\nstreamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.\nStructure is documented below.",
        Healthcare_DicomStoreStreamConfig_GetTypes(),
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
        'User-supplied key-value pairs used to organize DICOM stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the DicomStore.\n** Changing this property may recreate the Dicom store (removing all data) **",
        [],
        false,
        true,
      ),
    ];
  }
}
