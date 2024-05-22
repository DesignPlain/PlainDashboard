import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bedrock_getCustomModelsModelSummary {
  // Creation time of the model.
  creationTime?: string;

  // The ARN of the custom model.
  modelArn?: string;

  // The name of the custom model.
  modelName?: string;
}

export function bedrock_getCustomModelsModelSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "creationTime",
      "Creation time of the model.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelArn",
      "The ARN of the custom model.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelName",
      "The name of the custom model.",
      [],
      true,
      false,
    ),
  ];
}
