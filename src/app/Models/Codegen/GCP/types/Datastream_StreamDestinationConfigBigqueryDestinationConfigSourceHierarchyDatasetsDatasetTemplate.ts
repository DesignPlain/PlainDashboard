import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /*
If supplied, every created dataset will have its name prefixed by the provided value.
The prefix and name will be separated by an underscore. i.e. _.
*/
  DatasetIdPrefix?: string;

  /*
Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
table. The BigQuery Service Account associated with your project requires access to this
encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.

- - -
*/
  KmsKeyName?: string;

  /*
The geographic location where the dataset should reside.
See https://cloud.google.com/bigquery/docs/locations for supported locations.
*/
  Location?: string;
}

export function Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetIdPrefix",
      "If supplied, every created dataset will have its name prefixed by the provided value.\nThe prefix and name will be separated by an underscore. i.e. _.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect destination BigQuery\ntable. The BigQuery Service Account associated with your project requires access to this\nencryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.\nSee https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The geographic location where the dataset should reside.\nSee https://cloud.google.com/bigquery/docs/locations for supported locations.",
      [],
      true,
      false,
    ),
  ];
}
