import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard {
  //
  buttons?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton>;

  //
  imageUrl?: string;

  //
  subtitle?: string;

  //
  title?: string;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imageUrl",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subtitle",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "title", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "buttons",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariationImageResponseCardButton_GetTypes(),
      false,
      false,
    ),
  ];
}
