import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_IntentDialogCodeHook {
  /*
The version of the request-response that you want Amazon Lex to use
to invoke your Lambda function. For more information, see
[Using Lambda Functions](https://docs.aws.amazon.com/lex/latest/dg/using-lambda.html). Must be less than or equal to 5 characters in length.
*/
  messageVersion?: string;

  // The Amazon Resource Name (ARN) of the Lambda function.
  uri?: string;
}

export function lex_IntentDialogCodeHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "messageVersion",
      "The version of the request-response that you want Amazon Lex to use\nto invoke your Lambda function. For more information, see\n[Using Lambda Functions](https://docs.aws.amazon.com/lex/latest/dg/using-lambda.html). Must be less than or equal to 5 characters in length.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The Amazon Resource Name (ARN) of the Lambda function.",
      () => [],
      true,
      false,
    ),
  ];
}
