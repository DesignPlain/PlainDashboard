import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiFeatureStoreOnlineServingConfigScaling {
  // The maximum number of nodes to scale up to. Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  MaxNodeCount?: number;

  // The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  MinNodeCount?: number;
}

export function Vertex_AiFeatureStoreOnlineServingConfigScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxNodeCount",
      "The maximum number of nodes to scale up to. Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCount",
      "The minimum number of nodes to scale down to. Must be greater than or equal to 1.",
      [],
      true,
      false,
    ),
  ];
}
