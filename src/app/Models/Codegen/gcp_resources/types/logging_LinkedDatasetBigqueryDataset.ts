import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface logging_LinkedDatasetBigqueryDataset {
  /*
(Output)
Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID
of the link, so the link must match the naming restrictions of BigQuery datasets
(alphanumeric characters and underscores only). The dataset will have a resource path of
"bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET_ID]"
*/
  datasetId?: string;
}

export function logging_LinkedDatasetBigqueryDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      '(Output)\nOutput only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID\nof the link, so the link must match the naming restrictions of BigQuery datasets\n(alphanumeric characters and underscores only). The dataset will have a resource path of\n"bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET_ID]"',
      [],
      false,
      false,
    ),
  ];
}
