import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxIntentTrainingPhrasePart,
  diagflow_CxIntentTrainingPhrasePart_GetTypes,
} from "./diagflow_CxIntentTrainingPhrasePart";

export interface diagflow_CxIntentTrainingPhrase {
  // Indicates how many times this example was added to the intent.
  repeatCount?: number;

  /*
(Output)
The unique identifier of the training phrase.
*/
  id?: string;

  /*
The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.
Note: The API does not automatically annotate training phrases like the Dialogflow Console does.
Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.
If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.
If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:
Part.text is set to a part of the phrase that has no parameters.
Part.text is set to a part of the phrase that you want to annotate, and the parameterId field is set.
Structure is documented below.
*/
  parts?: Array<diagflow_CxIntentTrainingPhrasePart>;
}

export function diagflow_CxIntentTrainingPhrase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "repeatCount",
      "Indicates how many times this example was added to the intent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "(Output)\nThe unique identifier of the training phrase.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parts",
      "The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.\nNote: The API does not automatically annotate training phrases like the Dialogflow Console does.\nNote: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.\nIf the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.\nIf you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:\nPart.text is set to a part of the phrase that has no parameters.\nPart.text is set to a part of the phrase that you want to annotate, and the parameterId field is set.\nStructure is documented below.",
      diagflow_CxIntentTrainingPhrasePart_GetTypes(),
      true,
      false,
    ),
  ];
}
