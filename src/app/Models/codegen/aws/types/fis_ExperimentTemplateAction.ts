import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fis_ExperimentTemplateActionParameter,
  fis_ExperimentTemplateActionParameter_GetTypes,
} from './fis_ExperimentTemplateActionParameter';
import {
  fis_ExperimentTemplateActionTarget,
  fis_ExperimentTemplateActionTarget_GetTypes,
} from './fis_ExperimentTemplateActionTarget';

export interface fis_ExperimentTemplateAction {
  // ID of the action. To find out what actions are supported see [AWS FIS actions reference](https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html).
  actionId?: string;

  // Description of the action.
  description?: string;

  // Friendly name of the action.
  name?: string;

  // Parameter(s) for the action, if applicable. See below.
  parameters?: Array<fis_ExperimentTemplateActionParameter>;

  // Set of action names that must complete before this action can be executed.
  startAfters?: Array<string>;

  // Action's target, if applicable. See below.
  target?: fis_ExperimentTemplateActionTarget;
}

export function fis_ExperimentTemplateAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'actionId',
      'ID of the action. To find out what actions are supported see [AWS FIS actions reference](https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the action.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Friendly name of the action.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'Parameter(s) for the action, if applicable. See below.',
      () => fis_ExperimentTemplateActionParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'startAfters',
      'Set of action names that must complete before this action can be executed.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'target',
      "Action's target, if applicable. See below.",
      () => fis_ExperimentTemplateActionTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
