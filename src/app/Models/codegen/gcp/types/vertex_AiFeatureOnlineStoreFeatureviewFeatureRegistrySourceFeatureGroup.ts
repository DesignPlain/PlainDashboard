import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup {
  // Identifier of the feature group.
  featureGroupId?: string;

  // Identifiers of features under the feature group.
  featureIds?: Array<string>;
}

export function vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'featureGroupId',
      'Identifier of the feature group.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'featureIds',
      'Identifiers of features under the feature group.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
