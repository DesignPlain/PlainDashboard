import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiFeatureOnlineStoreEmbeddingManagement {
  // Enable embedding management.
  enabled?: boolean;
}

export function vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable embedding management.",
      [],
      false,
      true,
    ),
  ];
}
