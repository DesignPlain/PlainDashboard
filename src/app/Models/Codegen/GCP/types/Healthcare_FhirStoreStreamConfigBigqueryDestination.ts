import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig,
  Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig_GetTypes,
} from "./Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig";

export interface Healthcare_FhirStoreStreamConfigBigqueryDestination {
  // BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  DatasetUri?: string;

  /*
The configuration for the exported BigQuery schema.
Structure is documented below.
*/
  SchemaConfig?: Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig;
}

export function Healthcare_FhirStoreStreamConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetUri",
      "BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SchemaConfig",
      "The configuration for the exported BigQuery schema.\nStructure is documented below.",
      Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
