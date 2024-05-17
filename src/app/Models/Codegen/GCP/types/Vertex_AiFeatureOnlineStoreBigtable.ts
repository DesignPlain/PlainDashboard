import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreBigtableAutoScaling,
  Vertex_AiFeatureOnlineStoreBigtableAutoScaling_GetTypes,
} from "./Vertex_AiFeatureOnlineStoreBigtableAutoScaling";

export interface Vertex_AiFeatureOnlineStoreBigtable {
  /*
Autoscaling config applied to Bigtable Instance.
Structure is documented below.
*/
  AutoScaling?: Vertex_AiFeatureOnlineStoreBigtableAutoScaling;
}

export function Vertex_AiFeatureOnlineStoreBigtable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AutoScaling",
      "Autoscaling config applied to Bigtable Instance.\nStructure is documented below.",
      Vertex_AiFeatureOnlineStoreBigtableAutoScaling_GetTypes(),
      true,
      false,
    ),
  ];
}
