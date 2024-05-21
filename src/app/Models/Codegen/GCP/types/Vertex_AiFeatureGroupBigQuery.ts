import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiFeatureGroupBigQueryBigQuerySource,
  vertex_AiFeatureGroupBigQueryBigQuerySource_GetTypes,
} from "./vertex_AiFeatureGroupBigQueryBigQuerySource";

export interface vertex_AiFeatureGroupBigQuery {
  // Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.
  entityIdColumns?: Array<string>;

  /*
The BigQuery source URI that points to either a BigQuery Table or View.
Structure is documented below.
*/
  bigQuerySource?: vertex_AiFeatureGroupBigQueryBigQuerySource;
}

export function vertex_AiFeatureGroupBigQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "entityIdColumns",
      "Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "bigQuerySource",
      "The BigQuery source URI that points to either a BigQuery Table or View.\nStructure is documented below.",
      vertex_AiFeatureGroupBigQueryBigQuerySource_GetTypes(),
      true,
      true,
    ),
  ];
}
