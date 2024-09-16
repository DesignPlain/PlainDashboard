import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage';

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation {
  //
  ssmlMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage;

  //
  customPayloads?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload>;

  //
  imageResponseCard?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard;

  //
  plainTextMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customPayloads',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
