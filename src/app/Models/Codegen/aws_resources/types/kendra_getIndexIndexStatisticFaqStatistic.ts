import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_getIndexIndexStatisticFaqStatistic {
  // The total number of FAQ questions and answers contained in the index.
  indexedQuestionAnswersCount?: number;
}

export function kendra_getIndexIndexStatisticFaqStatistic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "indexedQuestionAnswersCount",
      "The total number of FAQ questions and answers contained in the index.",
      [],
      true,
      false,
    ),
  ];
}
