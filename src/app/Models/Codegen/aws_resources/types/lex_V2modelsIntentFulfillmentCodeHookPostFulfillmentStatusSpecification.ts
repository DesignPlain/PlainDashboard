import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse";

export interface lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification {
  // Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.
  successNextStep?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.
  timeoutResponse?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse;

  // Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.
  timeoutConditional?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional;

  // Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.
  timeoutNextStep?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep;

  // Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed. See `failure_conditional`.
  failureConditional?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional;

  // Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed. See `failure_next_step`.
  failureNextStep?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.
  failureResponse?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse;

  // Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.
  successConditional?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional;

  // Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.
  successResponse?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse;
}

export function lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "successNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook finishes successfully. See `success_next_step`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutResponse",
      "Configuration block for a list of message groups that Amazon Lex uses to respond the user input. See `timeout_response`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed. See `failure_conditional`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureNextStep",
      "Configuration block for the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed. See `failure_next_step`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutConditional",
      "Configuration block for conditional branches to evaluate if the code hook times out. See `timeout_conditional`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeoutNextStep",
      "Configuration block for the next step that the bot runs when the code hook times out. See `timeout_next_step`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutNextStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failureResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `failure_response`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successConditional",
      "Configuration block for conditional branches to evaluate after the dialog code hook finishes successfully. See `success_conditional`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessConditional_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successResponse",
      "Configuration block for message groups that Amazon Lex uses to respond the user input. See `success_response`.",
      lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
