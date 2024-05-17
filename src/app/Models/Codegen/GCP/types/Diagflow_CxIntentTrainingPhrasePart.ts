import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxIntentTrainingPhrasePart {
  // The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
  ParameterId?: string;

  // The text for this part.
  Text?: string;
}

export function Diagflow_CxIntentTrainingPhrasePart_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ParameterId",
      "The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Text",
      "The text for this part.",
      [],
      true,
      false,
    ),
  ];
}
