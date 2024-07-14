import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_FilterFindingCriteriaCriterion,
  guardduty_FilterFindingCriteriaCriterion_GetTypes,
} from "./guardduty_FilterFindingCriteriaCriterion";

export interface guardduty_FilterFindingCriteria {
  //
  criterions?: Array<guardduty_FilterFindingCriteriaCriterion>;
}

export function guardduty_FilterFindingCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "criterions",
      "",
      guardduty_FilterFindingCriteriaCriterion_GetTypes(),
      true,
      false,
    ),
  ];
}
