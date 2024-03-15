import { CxIntentTrainingPhrasePart } from "./CxIntentTrainingPhrasePart";

export interface CxIntentTrainingPhrase {
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
  Parts?: Array<CxIntentTrainingPhrasePart>;

  // Indicates how many times this example was added to the intent.
  RepeatCount?: number;

  /*
(Output)
The unique identifier of the training phrase.
*/
  Id?: string;
}
