import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecification {
  //
  allowInterrupt?: boolean;

  //
  maxRetries?: number;

  //
  messageGroups?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup>;

  //
  messageSelectionStrategy?: string;

  //
  promptAttemptsSpecifications?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification>;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageSelectionStrategy",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "promptAttemptsSpecifications",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
