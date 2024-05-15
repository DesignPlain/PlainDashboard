import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureGroupBigQueryBigQuerySource,
  Vertex_AiFeatureGroupBigQueryBigQuerySource_GetTypes,
} from "./Vertex_AiFeatureGroupBigQueryBigQuerySource";

export interface Vertex_AiFeatureGroupBigQuery {
  /*
The BigQuery source URI that points to either a BigQuery Table or View.
Structure is documented below.
*/
  BigQuerySource?: Vertex_AiFeatureGroupBigQueryBigQuerySource;

  // Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.
  EntityIdColumns?: Array<string>;
}

export function Vertex_AiFeatureGroupBigQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BigQuerySource",
      "The BigQuery source URI that points to either a BigQuery Table or View.\nStructure is documented below.",
      Vertex_AiFeatureGroupBigQueryBigQuerySource_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EntityIdColumns",
      "Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
