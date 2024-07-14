import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional";

export interface lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification {
  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.
  failureResponse?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.
  successResponse?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse;

  // Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.
  timeoutNextStep?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.
  timeoutResponse?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse;

  // Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
  failureConditional?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional;

  // Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed . See `failure_next_step`.
  failureNextStep?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep;

  // Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.
  successConditional?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional;

  // Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.
  successNextStep?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep;

  // Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.
  timeoutConditional?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional;
}

export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "failureResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutNextStep",
      "Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutResponse",
      "Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed . See `failure_next_step`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutConditional",
      "Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional_GetTypes(),
      false,
      false,
    ),
  ];
}
