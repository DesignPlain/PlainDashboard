import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification,
  lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecification,
  lex_V2modelsSlotValueElicitationSettingPromptSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecification";
import {
  lex_V2modelsSlotValueElicitationSettingSampleUtterance,
  lex_V2modelsSlotValueElicitationSettingSampleUtterance_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingSampleUtterance";
import {
  lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting,
  lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting";
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification";

export interface lex_V2modelsSlotValueElicitationSetting {
  //
  promptSpecification?: lex_V2modelsSlotValueElicitationSettingPromptSpecification;

  //
  sampleUtterances?: Array<lex_V2modelsSlotValueElicitationSettingSampleUtterance>;

  //
  slotConstraint?: string;

  //
  slotResolutionSettings?: Array<lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting>;

  //
  waitAndContinueSpecifications?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification>;

  //
  defaultValueSpecifications?: Array<lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification>;
}

export function lex_V2modelsSlotValueElicitationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "promptSpecification",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sampleUtterances",
      "",
      lex_V2modelsSlotValueElicitationSettingSampleUtterance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "slotConstraint", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "slotResolutionSettings",
      "",
      lex_V2modelsSlotValueElicitationSettingSlotResolutionSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "waitAndContinueSpecifications",
      "",
      lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "defaultValueSpecifications",
      "",
      lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
