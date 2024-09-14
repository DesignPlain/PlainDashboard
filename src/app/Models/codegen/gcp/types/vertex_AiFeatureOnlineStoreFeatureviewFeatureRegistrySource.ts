import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup,
  vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes,
} from "./vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup";

export interface vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
  /*
List of features that need to be synced to Online Store.
Structure is documented below.
*/
  featureGroups?: Array<vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup>;
}

export function vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "featureGroups",
      "List of features that need to be synced to Online Store.\nStructure is documented below.",
      () =>
        vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
