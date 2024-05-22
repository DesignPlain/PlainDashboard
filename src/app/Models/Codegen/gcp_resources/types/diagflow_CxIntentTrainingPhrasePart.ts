import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxIntentTrainingPhrasePart {
  // The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
  parameterId?: string;

  // The text for this part.
  text?: string;
}

export function diagflow_CxIntentTrainingPhrasePart_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "parameterId",
      "The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "text",
      "The text for this part.",
      [],
      true,
      false,
    ),
  ];
}
