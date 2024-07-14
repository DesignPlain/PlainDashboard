import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssm_getContactsRotationRecurrence {
  //
  recurrenceMultiplier?: number;

  //
  shiftCoverages?: Array<string>;

  //
  weeklySettings?: Array<string>;

  //
  dailySettings?: Array<string>;

  //
  monthlySettings?: Array<string>;

  //
  numberOfOnCalls?: number;
}

export function ssm_getContactsRotationRecurrence_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "monthlySettings",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfOnCalls",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "recurrenceMultiplier",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shiftCoverages",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weeklySettings",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dailySettings",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
