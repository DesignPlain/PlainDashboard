import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kendra_getIndexIndexStatisticFaqStatistic,
  kendra_getIndexIndexStatisticFaqStatistic_GetTypes,
} from "./kendra_getIndexIndexStatisticFaqStatistic";
import {
  kendra_getIndexIndexStatisticTextDocumentStatistic,
  kendra_getIndexIndexStatisticTextDocumentStatistic_GetTypes,
} from "./kendra_getIndexIndexStatisticTextDocumentStatistic";

export interface kendra_getIndexIndexStatistic {
  // Block that specifies the number of question and answer topics in the index. Documented below.
  faqStatistics?: Array<kendra_getIndexIndexStatisticFaqStatistic>;

  // A block that specifies the number of text documents indexed.
  textDocumentStatistics?: Array<kendra_getIndexIndexStatisticTextDocumentStatistic>;
}

export function kendra_getIndexIndexStatistic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "faqStatistics",
      "Block that specifies the number of question and answer topics in the index. Documented below.",
      kendra_getIndexIndexStatisticFaqStatistic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textDocumentStatistics",
      "A block that specifies the number of text documents indexed.",
      kendra_getIndexIndexStatisticTextDocumentStatistic_GetTypes(),
      true,
      false,
    ),
  ];
}
