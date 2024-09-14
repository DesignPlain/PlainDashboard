import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigateway_AccountThrottleSetting,
  apigateway_AccountThrottleSetting_GetTypes,
} from "../types/apigateway_AccountThrottleSetting";

export interface AccountArgs {
  // ARN of an IAM role for CloudWatch (to allow logging & monitoring). See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console). Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
  cloudwatchRoleArn?: string;
}
export class Account extends DS_Resource {
  // The version of the API keys used for the account.
  public apiKeyVersion?: string;

  // ARN of an IAM role for CloudWatch (to allow logging & monitoring). See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console). Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
  public cloudwatchRoleArn?: string;

  // A list of features supported for the account.
  public features?: Array<string>;

  // Account-Level throttle settings. See exported fields below.
  public throttleSettings?: Array<apigateway_AccountThrottleSetting>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cloudwatchRoleArn",
        "ARN of an IAM role for CloudWatch (to allow logging & monitoring). See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console). Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
