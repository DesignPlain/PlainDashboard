import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse";

export interface lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification {
  // Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.
  timeoutConditional?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional;

  // Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.
  timeoutNextStep?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.
  timeoutResponse?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse;

  // Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
  failureConditional?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional;

  // Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed . See `failure_next_step`.
  failureNextStep?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep;

  // Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.
  successConditional?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional;

  // Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.
  successNextStep?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.
  failureResponse?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.
  successResponse?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse;
}

export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "successNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed . See `failure_next_step`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutResponse",
      "Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutConditional",
      "Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutNextStep",
      "Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutNextStep_GetTypes(),
      false,
      false,
    ),
  ];
}
