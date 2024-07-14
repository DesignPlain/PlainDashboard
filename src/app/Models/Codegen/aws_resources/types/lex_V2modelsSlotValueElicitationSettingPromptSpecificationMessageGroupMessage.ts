import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage {
  //
  customPayloads?: Array<string>;

  //
  imageResponseCard?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard;

  //
  plainTextMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage;

  //
  ssmlMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageSsmlMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customPayloads",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessagePlainTextMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
