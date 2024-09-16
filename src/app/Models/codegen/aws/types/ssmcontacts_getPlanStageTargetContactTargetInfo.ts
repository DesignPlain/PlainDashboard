import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ssmcontacts_getPlanStageTargetContactTargetInfo {
  // The Amazon Resource Name (ARN) of the contact or escalation plan.
  contactId?: string;

  //
  isEssential?: boolean;
}

export function ssmcontacts_getPlanStageTargetContactTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contactId',
      'The Amazon Resource Name (ARN) of the contact or escalation plan.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isEssential',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
