import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_TriggerPredicateCondition,
  glue_TriggerPredicateCondition_GetTypes,
} from "./glue_TriggerPredicateCondition";

export interface glue_TriggerPredicate {
  // A list of the conditions that determine when the trigger will fire. See Conditions.
  conditions?: Array<glue_TriggerPredicateCondition>;

  // How to handle multiple conditions. Defaults to `AND`. Valid values are `AND` or `ANY`.
  logical?: string;
}

export function glue_TriggerPredicate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "A list of the conditions that determine when the trigger will fire. See Conditions.",
      glue_TriggerPredicateCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logical",
      "How to handle multiple conditions. Defaults to `AND`. Valid values are `AND` or `ANY`.",
      [],
      false,
      false,
    ),
  ];
}
