import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmcontacts_getPlanStageTargetContactTargetInfo {
  //
  isEssential?: boolean;

  // The Amazon Resource Name (ARN) of the contact or escalation plan.
  contactId?: string;
}

export function ssmcontacts_getPlanStageTargetContactTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "isEssential", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "contactId",
      "The Amazon Resource Name (ARN) of the contact or escalation plan.",
      [],
      true,
      false,
    ),
  ];
}
