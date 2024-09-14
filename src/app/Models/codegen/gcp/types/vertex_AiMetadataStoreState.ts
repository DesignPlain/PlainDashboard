import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vertex_AiMetadataStoreState {
  /*
(Output)
The disk utilization of the MetadataStore in bytes.
*/
  diskUtilizationBytes?: string;
}

export function vertex_AiMetadataStoreState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "diskUtilizationBytes",
      "(Output)\nThe disk utilization of the MetadataStore in bytes.",
      () => [],
      false,
      false,
    ),
  ];
}
