import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig,
  healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig_GetTypes,
} from "./healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig";

export interface healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig {
  /*
The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.
Structure is documented below.
*/
  lastUpdatedPartitionConfig?: healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;

  /*
The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.
*/
  recursiveStructureDepth?: number;

  /*
Specifies the output schema type.
- ANALYTICS: Analytics schema defined by the FHIR community.
See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
- ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
- LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification.
Default value is `ANALYTICS`.
Possible values are: `ANALYTICS`, `ANALYTICS_V2`, `LOSSLESS`.
*/
  schemaType?: string;
}

export function healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lastUpdatedPartitionConfig",
      "The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.\nStructure is documented below.",
      () =>
        healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "recursiveStructureDepth",
      "The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem\nresource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called\nconcept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default\nvalue 2. The maximum depth allowed is 5.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schemaType",
      "Specifies the output schema type.\n* ANALYTICS: Analytics schema defined by the FHIR community.\nSee https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.\n* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.\n* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification.\nDefault value is `ANALYTICS`.\nPossible values are: `ANALYTICS`, `ANALYTICS_V2`, `LOSSLESS`.",
      () => [],
      false,
      false,
    ),
  ];
}
