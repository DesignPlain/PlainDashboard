import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_IndexIndexStatisticTextDocumentStatistic,
  kendra_IndexIndexStatisticTextDocumentStatistic_GetTypes,
} from "./kendra_IndexIndexStatisticTextDocumentStatistic";
import {
  kendra_IndexIndexStatisticFaqStatistic,
  kendra_IndexIndexStatisticFaqStatistic_GetTypes,
} from "./kendra_IndexIndexStatisticFaqStatistic";

export interface kendra_IndexIndexStatistic {
  // A block that specifies the number of text documents indexed. Detailed below.
  textDocumentStatistics?: Array<kendra_IndexIndexStatisticTextDocumentStatistic>;

  // A block that specifies the number of question and answer topics in the index. Detailed below.
  faqStatistics?: Array<kendra_IndexIndexStatisticFaqStatistic>;
}

export function kendra_IndexIndexStatistic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textDocumentStatistics",
      "A block that specifies the number of text documents indexed. Detailed below.",
      () => kendra_IndexIndexStatisticTextDocumentStatistic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "faqStatistics",
      "A block that specifies the number of question and answer topics in the index. Detailed below.",
      () => kendra_IndexIndexStatisticFaqStatistic_GetTypes(),
      false,
      false,
    ),
  ];
}
