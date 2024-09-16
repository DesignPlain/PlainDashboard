import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      'parameterId',
      'The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'text',
      'The text for this part.',
      () => [],
      true,
      false,
    ),
  ];
}
