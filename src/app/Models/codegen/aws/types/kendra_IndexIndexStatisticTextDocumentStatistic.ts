import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_IndexIndexStatisticTextDocumentStatistic {
  // The total size, in bytes, of the indexed documents.
  indexedTextBytes?: number;

  // The number of text documents indexed.
  indexedTextDocumentsCount?: number;
}

export function kendra_IndexIndexStatisticTextDocumentStatistic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'indexedTextBytes',
      'The total size, in bytes, of the indexed documents.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'indexedTextDocumentsCount',
      'The number of text documents indexed.',
      () => [],
      false,
      false,
    ),
  ];
}
