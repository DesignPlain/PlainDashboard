import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification';

export interface lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification {
  //
  allowInterrupt?: boolean;

  //
  maxRetries?: number;

  //
  messageGroups?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup>;

  //
  messageSelectionStrategy?: string;

  //
  promptAttemptsSpecifications?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification>;
}

export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messageGroups',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageSelectionStrategy',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'promptAttemptsSpecifications',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowInterrupt',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxRetries',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
