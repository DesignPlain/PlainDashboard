import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssmcontacts_PlanStage,
  ssmcontacts_PlanStage_GetTypes,
} from '../types/ssmcontacts_PlanStage';

export interface PlanArgs {
  // The Amazon Resource Name (ARN) of the contact or escalation plan.
  contactId?: string;

  // One or more configuration blocks for specifying a list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods. See Stage below for more details.
  stages?: Array<ssmcontacts_PlanStage>;
}
export class Plan extends DS_Resource {
  // The Amazon Resource Name (ARN) of the contact or escalation plan.
  public contactId?: string;

  // One or more configuration blocks for specifying a list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods. See Stage below for more details.
  public stages?: Array<ssmcontacts_PlanStage>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'contactId',
        'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'stages',
        'One or more configuration blocks for specifying a list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods. See Stage below for more details.',
        () => ssmcontacts_PlanStage_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
