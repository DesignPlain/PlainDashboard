import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiFeatureOnlineStoreEmbeddingManagement {
  // Enable embedding management.
  Enabled?: boolean;
}

export function Vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable embedding management.",
      [],
      false,
      true,
    ),
  ];
}
