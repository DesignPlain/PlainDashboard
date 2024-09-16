import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification';

export interface lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting {
  //
  sampleUtterances?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance>;

  //
  waitAndContinueSpecifications?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification>;

  //
  defaultValueSpecifications?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification>;

  //
  promptSpecification?: lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification;
}

export function lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'promptSpecification',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingPromptSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sampleUtterances',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingSampleUtterance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'waitAndContinueSpecifications',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingWaitAndContinueSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'defaultValueSpecifications',
      '',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSettingDefaultValueSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
