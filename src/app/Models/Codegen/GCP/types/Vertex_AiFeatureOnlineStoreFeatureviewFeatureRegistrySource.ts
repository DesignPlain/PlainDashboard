import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup,
  Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes,
} from "./Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup";

export interface Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
  /*
List of features that need to be synced to Online Store.
Structure is documented below.
*/
  FeatureGroups?: Array<Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup>;
}

export function Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FeatureGroups",
      "List of features that need to be synced to Online Store.\nStructure is documented below.",
      Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
