import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pinpoint_AppCampaignHook {
  // Lambda function name or ARN to be called for delivery. Conflicts with `web_url`
  lambdaFunctionName?: string;

  // What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.
  mode?: string;

  // Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`
  webUrl?: string;
}

export function pinpoint_AppCampaignHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lambdaFunctionName",
      "Lambda function name or ARN to be called for delivery. Conflicts with `web_url`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webUrl",
      "Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`",
      () => [],
      false,
      false,
    ),
  ];
}
