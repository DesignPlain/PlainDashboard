import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse,
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse";
import {
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse,
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse";

export interface lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification {
  // Length of time that the fulfillment Lambda function should run before it times out.
  timeoutInSeconds?: number;

  // Configuration block for messages sent periodically to the user while the fulfillment Lambda function is running.
  updateResponse?: lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse;

  // Whether fulfillment updates are sent to the user. When this field is true, updates are sent. If the active field is set to true, the `start_response`, `update_response`, and `timeout_in_seconds` fields are required.
  active?: boolean;

  // Configuration block for the message sent to users when the fulfillment Lambda functions starts running.
  startResponse?: lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse;
}

export function lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeoutInSeconds",
      "Length of time that the fulfillment Lambda function should run before it times out.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "updateResponse",
      "Configuration block for messages sent periodically to the user while the fulfillment Lambda function is running.",
      lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Whether fulfillment updates are sent to the user. When this field is true, updates are sent. If the active field is set to true, the `start_response`, `update_response`, and `timeout_in_seconds` fields are required.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startResponse",
      "Configuration block for the message sent to users when the fulfillment Lambda functions starts running.",
      lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
