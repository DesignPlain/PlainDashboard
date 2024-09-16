import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup';

export interface lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
  //
  messageGroups?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup>;

  //
  allowInterrupt?: boolean;
}

export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messageGroups',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup_GetTypes(),
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
  ];
}
