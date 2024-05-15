import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureStoreOnlineServingConfigScaling,
  Vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes,
} from "./Vertex_AiFeatureStoreOnlineServingConfigScaling";

export interface Vertex_AiFeatureStoreOnlineServingConfig {
  // The number of nodes for each cluster. The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.
  FixedNodeCount?: number;

  /*
Online serving scaling configuration. Only one of fixedNodeCount and scaling can be set. Setting one will reset the other.
Structure is documented below.
*/
  Scaling?: Vertex_AiFeatureStoreOnlineServingConfigScaling;
}

export function Vertex_AiFeatureStoreOnlineServingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "FixedNodeCount",
      "The number of nodes for each cluster. The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Scaling",
      "Online serving scaling configuration. Only one of fixedNodeCount and scaling can be set. Setting one will reset the other.\nStructure is documented below.",
      Vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes(),
      false,
      false,
    ),
  ];
}
