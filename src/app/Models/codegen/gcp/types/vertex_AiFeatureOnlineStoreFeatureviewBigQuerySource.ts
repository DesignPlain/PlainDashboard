import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource {
  // Columns to construct entityId / row keys. Start by supporting 1 only.
  entityIdColumns?: Array<string>;

  // The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.
  uri?: string;
}

export function vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'entityIdColumns',
      'Columns to construct entityId / row keys. Start by supporting 1 only.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'uri',
      'The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.',
      () => [],
      true,
      false,
    ),
  ];
}
