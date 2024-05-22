import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation {
  //
  customPayloads?: Array<string>;

  //
  imageResponseCard?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard;

  //
  plainTextMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage;

  //
  ssmlMessage?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "imageResponseCard",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "plainTextMessage",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationPlainTextMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ssmlMessage",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationSsmlMessage_GetTypes(),
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
  ];
}
