import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearchingest_PipelineBufferOptions {
  // Whether persistent buffering should be enabled.
  persistentBufferEnabled?: boolean;
}

export function opensearchingest_PipelineBufferOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "persistentBufferEnabled",
      "Whether persistent buffering should be enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
