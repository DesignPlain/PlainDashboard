import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup {
  // Identifiers of features under the feature group.
  FeatureIds?: Array<string>;

  // Identifier of the feature group.
  FeatureGroupId?: string;
}

export function Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FeatureIds",
      "Identifiers of features under the feature group.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FeatureGroupId",
      "Identifier of the feature group.",
      [],
      true,
      false,
    ),
  ];
}
