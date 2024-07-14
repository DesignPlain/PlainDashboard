import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmcontacts_PlanStageTargetContactTargetInfo {
  // The Amazon Resource Name (ARN) of the contact.
  contactId?: string;

  // A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
  isEssential?: boolean;
}

export function ssmcontacts_PlanStageTargetContactTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contactId",
      "The Amazon Resource Name (ARN) of the contact.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isEssential",
      "A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.",
      [],
      true,
      false,
    ),
  ];
}
