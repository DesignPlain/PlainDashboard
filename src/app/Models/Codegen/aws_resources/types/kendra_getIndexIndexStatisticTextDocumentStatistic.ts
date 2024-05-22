import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_getIndexIndexStatisticTextDocumentStatistic {
  // Total size, in bytes, of the indexed documents.
  indexedTextBytes?: number;

  // The number of text documents indexed.
  indexedTextDocumentsCount?: number;
}

export function kendra_getIndexIndexStatisticTextDocumentStatistic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "indexedTextBytes",
      "Total size, in bytes, of the indexed documents.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "indexedTextDocumentsCount",
      "The number of text documents indexed.",
      [],
      true,
      false,
    ),
  ];
}
