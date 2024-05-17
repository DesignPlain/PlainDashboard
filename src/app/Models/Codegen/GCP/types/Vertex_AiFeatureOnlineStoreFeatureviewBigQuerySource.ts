import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource {
  // The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.
  Uri?: string;

  // Columns to construct entityId / row keys. Start by supporting 1 only.
  EntityIdColumns?: Array<string>;
}

export function Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EntityIdColumns",
      "Columns to construct entityId / row keys. Start by supporting 1 only.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
