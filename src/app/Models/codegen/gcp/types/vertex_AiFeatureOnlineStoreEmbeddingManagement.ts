import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureOnlineStoreEmbeddingManagement {
  // Enable embedding management.
  enabled?: boolean;
}

export function vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enable embedding management.',
      () => [],
      false,
      true,
    ),
  ];
}
