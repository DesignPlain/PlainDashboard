import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiMetadataStoreState {
  /*
(Output)
The disk utilization of the MetadataStore in bytes.
*/
  DiskUtilizationBytes?: string;
}

export function Vertex_AiMetadataStoreState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DiskUtilizationBytes",
      "(Output)\nThe disk utilization of the MetadataStore in bytes.",
      [],
      false,
      false,
    ),
  ];
}
