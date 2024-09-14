import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  healthcare_DicomStoreNotificationConfig,
  healthcare_DicomStoreNotificationConfig_GetTypes,
} from "../types/healthcare_DicomStoreNotificationConfig";
import {
  healthcare_DicomStoreStreamConfig,
  healthcare_DicomStoreStreamConfig_GetTypes,
} from "../types/healthcare_DicomStoreStreamConfig";

export interface DicomStoreArgs {
  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  dataset?: string;

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
  labels?: Map<string, string>;

  /*
The resource name for the DicomStore.
-- Changing this property may recreate the Dicom store (removing all data) --
*/
  name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  notificationConfig?: healthcare_DicomStoreNotificationConfig;

  /*
To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.
streamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.
Structure is documented below.
*/
  streamConfigs?: Array<healthcare_DicomStoreStreamConfig>;
}
export class DicomStore extends DS_Resource {
  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public dataset?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

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
  public labels?: Map<string, string>;

  /*
The resource name for the DicomStore.
-- Changing this property may recreate the Dicom store (removing all data) --
*/
  public name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public notificationConfig?: healthcare_DicomStoreNotificationConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The fully qualified name of this dataset
  public selfLink?: string;

  /*
To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.
streamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.
Structure is documented below.
*/
  public streamConfigs?: Array<healthcare_DicomStoreStreamConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'User-supplied key-value pairs used to organize DICOM stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for the DicomStore.\n** Changing this property may recreate the Dicom store (removing all data) **",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationConfig",
        "A nested object resource\nStructure is documented below.",
        () => healthcare_DicomStoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "streamConfigs",
        "To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.\nstreamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.\nStructure is documented below.",
        () => healthcare_DicomStoreStreamConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
