import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton,
  lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton";

export interface lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  // Configuration blocks for buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button. See `button`.
  buttons?: Array<lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton>;

  // URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
  imageUrl?: string;

  // Subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
  subtitle?: string;

  // Title to display on the response card. The format of the title is determined by the platform displaying the response card.
  title?: string;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "buttons",
      "Configuration blocks for buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button. See `button`.",
      lex_V2modelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageUrl",
      "URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subtitle",
      "Subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Title to display on the response card. The format of the title is determined by the platform displaying the response card.",
      [],
      true,
      false,
    ),
  ];
}
