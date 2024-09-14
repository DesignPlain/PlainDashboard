import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification,
  lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification";
import {
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification,
  lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification_GetTypes,
} from "./lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification";

export interface lex_V2modelsIntentFulfillmentCodeHook {
  // Configuration block for settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations. See `fulfillment_updates_specification`.
  fulfillmentUpdatesSpecification?: lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification;

  // Configuration block for settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations. See `post_fulfillment_status_specification`.
  postFulfillmentStatusSpecification?: lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification;

  // Whether the fulfillment code hook is used. When active is false, the code hook doesn't run.
  active?: boolean;

  // Whether a Lambda function should be invoked to fulfill a specific intent.
  enabled?: boolean;
}

export function lex_V2modelsIntentFulfillmentCodeHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Whether the fulfillment code hook is used. When active is false, the code hook doesn't run.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether a Lambda function should be invoked to fulfill a specific intent.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fulfillmentUpdatesSpecification",
      "Configuration block for settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations. See `fulfillment_updates_specification`.",
      () =>
        lex_V2modelsIntentFulfillmentCodeHookFulfillmentUpdatesSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postFulfillmentStatusSpecification",
      "Configuration block for settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations. See `post_fulfillment_status_specification`.",
      () =>
        lex_V2modelsIntentFulfillmentCodeHookPostFulfillmentStatusSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
