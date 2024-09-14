import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton";

export interface lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
  // Title to display on the response card. The format of the title is determined by the platform displaying the response card.
  title?: string;

  // Configuration blocks for buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button. See `button`.
  buttons?: Array<lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton>;

  // URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
  imageUrl?: string;

  // Subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
  subtitle?: string;
}

export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subtitle",
      "Subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Title to display on the response card. The format of the title is determined by the platform displaying the response card.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "buttons",
      "Configuration blocks for buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button. See `button`.",
      () =>
        lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageUrl",
      "URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.",
      () => [],
      false,
      false,
    ),
  ];
}
