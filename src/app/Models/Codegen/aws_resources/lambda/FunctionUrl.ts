import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lambda_FunctionUrlCors,
  lambda_FunctionUrlCors_GetTypes,
} from "../types/lambda_FunctionUrlCors";

export interface FunctionUrlArgs {
  // The name (or ARN) of the Lambda function.
  functionName?: string;

  // Determines how the Lambda function responds to an invocation. Valid values are `BUFFERED` (default) and `RESPONSE_STREAM`. See more in [Configuring a Lambda function to stream responses](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html).
  invokeMode?: string;

  // The alias name or `"$LATEST"`.
  qualifier?: string;

  // The type of authentication that the function URL uses. Set to `"AWS_IAM"` to restrict access to authenticated IAM users only. Set to `"NONE"` to bypass IAM authentication and create a public endpoint. See the [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) for more details.
  authorizationType?: string;

  // The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for the function URL. Documented below.
  cors?: lambda_FunctionUrlCors;
}
export class FunctionUrl extends Resource {
  // The type of authentication that the function URL uses. Set to `"AWS_IAM"` to restrict access to authenticated IAM users only. Set to `"NONE"` to bypass IAM authentication and create a public endpoint. See the [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) for more details.
  public authorizationType?: string;

  // The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for the function URL. Documented below.
  public cors?: lambda_FunctionUrlCors;

  // The Amazon Resource Name (ARN) of the function.
  public functionArn?: string;

  // The name (or ARN) of the Lambda function.
  public functionName?: string;

  // The HTTP URL endpoint for the function in the format `https://<url_id>.lambda-url.<region>.on.aws/`.
  public functionUrl?: string;

  // Determines how the Lambda function responds to an invocation. Valid values are `BUFFERED` (default) and `RESPONSE_STREAM`. See more in [Configuring a Lambda function to stream responses](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html).
  public invokeMode?: string;

  // The alias name or `"$LATEST"`.
  public qualifier?: string;

  // A generated ID for the endpoint.
  public urlId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "The name (or ARN) of the Lambda function.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "invokeMode",
        "Determines how the Lambda function responds to an invocation. Valid values are `BUFFERED` (default) and `RESPONSE_STREAM`. See more in [Configuring a Lambda function to stream responses](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        'The alias name or `"$LATEST"`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizationType",
        'The type of authentication that the function URL uses. Set to `"AWS_IAM"` to restrict access to authenticated IAM users only. Set to `"NONE"` to bypass IAM authentication and create a public endpoint. See the [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) for more details.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cors",
        "The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for the function URL. Documented below.",
        lambda_FunctionUrlCors_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
