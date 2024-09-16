import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EventApiDestinationArgs {
  // The description of the new API Destination. Maximum of 512 characters.
  description?: string;

  // Select the HTTP method used for the invocation endpoint, such as GET, POST, PUT, etc.
  httpMethod?: string;

  // URL endpoint to invoke as a target. This could be a valid endpoint generated by a partner service. You can include "-" as path parameters wildcards to be set from the Target HttpParameters.
  invocationEndpoint?: string;

  // Enter the maximum number of invocations per second to allow for this destination. Enter a value greater than 0 (default 300).
  invocationRateLimitPerSecond?: number;

  // The name of the new API Destination. The name must be unique for your account. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.
  name?: string;

  // ARN of the EventBridge Connection to use for the API Destination.
  connectionArn?: string;
}
export class EventApiDestination extends DS_Resource {
  // Select the HTTP method used for the invocation endpoint, such as GET, POST, PUT, etc.
  public httpMethod?: string;

  // URL endpoint to invoke as a target. This could be a valid endpoint generated by a partner service. You can include "-" as path parameters wildcards to be set from the Target HttpParameters.
  public invocationEndpoint?: string;

  // Enter the maximum number of invocations per second to allow for this destination. Enter a value greater than 0 (default 300).
  public invocationRateLimitPerSecond?: number;

  // The name of the new API Destination. The name must be unique for your account. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.
  public name?: string;

  // The Amazon Resource Name (ARN) of the event API Destination.
  public arn?: string;

  // ARN of the EventBridge Connection to use for the API Destination.
  public connectionArn?: string;

  // The description of the new API Destination. Maximum of 512 characters.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the new API Destination. Maximum of 512 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'httpMethod',
        'Select the HTTP method used for the invocation endpoint, such as GET, POST, PUT, etc.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'invocationEndpoint',
        'URL endpoint to invoke as a target. This could be a valid endpoint generated by a partner service. You can include "*" as path parameters wildcards to be set from the Target HttpParameters.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'invocationRateLimitPerSecond',
        'Enter the maximum number of invocations per second to allow for this destination. Enter a value greater than 0 (default 300).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the new API Destination. The name must be unique for your account. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionArn',
        'ARN of the EventBridge Connection to use for the API Destination.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
