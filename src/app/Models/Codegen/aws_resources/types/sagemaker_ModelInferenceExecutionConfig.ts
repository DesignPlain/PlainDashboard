import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_ModelInferenceExecutionConfig {
  // The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.
  mode?: string;
}

export function sagemaker_ModelInferenceExecutionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.",
      [],
      true,
      false,
    ),
  ];
}
