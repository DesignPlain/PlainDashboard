import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_IntentFulfillmentActivityCodeHook,
  lex_IntentFulfillmentActivityCodeHook_GetTypes,
} from "./lex_IntentFulfillmentActivityCodeHook";

export interface lex_IntentFulfillmentActivity {
  /*
A description of the Lambda function that is run to fulfill the intent.
Required if type is CodeHook. Attributes are documented under code_hook.
*/
  codeHook?: lex_IntentFulfillmentActivityCodeHook;

  /*
How the intent should be fulfilled, either by running a Lambda function or by
returning the slot data to the client application. Type can be either `ReturnIntent` or `CodeHook`, as documented [here](https://docs.aws.amazon.com/lex/latest/dg/API_FulfillmentActivity.html).
*/
  type?: string;
}

export function lex_IntentFulfillmentActivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "codeHook",
      "A description of the Lambda function that is run to fulfill the intent.\nRequired if type is CodeHook. Attributes are documented under code_hook.",
      lex_IntentFulfillmentActivityCodeHook_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "How the intent should be fulfilled, either by running a Lambda function or by\nreturning the slot data to the client application. Type can be either `ReturnIntent` or `CodeHook`, as documented [here](https://docs.aws.amazon.com/lex/latest/dg/API_FulfillmentActivity.html).",
      [],
      true,
      false,
    ),
  ];
}
