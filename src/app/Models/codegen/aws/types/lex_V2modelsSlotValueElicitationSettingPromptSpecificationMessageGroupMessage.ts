import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes,
} from './lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage';

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage {
  //
  ssmlMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage;

  //
  customPayloads?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload>;

  //
  imageResponseCard?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard;

  //
  plainTextMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ssmlMessage',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customPayloads',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageCustomPayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageResponseCard',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'plainTextMessage',
      '',
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
