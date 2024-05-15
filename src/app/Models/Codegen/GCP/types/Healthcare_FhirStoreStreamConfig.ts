import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_FhirStoreStreamConfigBigqueryDestination,
  Healthcare_FhirStoreStreamConfigBigqueryDestination_GetTypes,
} from "./Healthcare_FhirStoreStreamConfigBigqueryDestination";

export interface Healthcare_FhirStoreStreamConfig {
  /*
The destination BigQuery structure that contains both the dataset location and corresponding schema config.
The output is organized in one table per resource type. The server reuses the existing tables (if any) that
are named after the resource types, e.g. "Patient", "Observation". When there is no existing table for a given
resource type, the server attempts to create one.
See the [streaming config reference](https://cloud.google.com/healthcare/docs/reference/rest/v1beta1/projects.locations.datasets.fhirStores#streamconfig) for more details.
Structure is documented below.
*/
  BigqueryDestination?: Healthcare_FhirStoreStreamConfigBigqueryDestination;

  /*
Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.
*/
  ResourceTypes?: Array<string>;
}

export function Healthcare_FhirStoreStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BigqueryDestination",
      'The destination BigQuery structure that contains both the dataset location and corresponding schema config.\nThe output is organized in one table per resource type. The server reuses the existing tables (if any) that\nare named after the resource types, e.g. "Patient", "Observation". When there is no existing table for a given\nresource type, the server attempts to create one.\nSee the [streaming config reference](https://cloud.google.com/healthcare/docs/reference/rest/v1beta1/projects.locations.datasets.fhirStores#streamconfig) for more details.\nStructure is documented below.',
      Healthcare_FhirStoreStreamConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResourceTypes",
      'Supply a FHIR resource type (such as "Patient" or "Observation"). See\nhttps://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats\nan empty list as an intent to stream all the supported resource types in this FHIR store.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
