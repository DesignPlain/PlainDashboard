import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudtasks_QueueStackdriverLoggingConfig,
  Cloudtasks_QueueStackdriverLoggingConfig_GetTypes,
} from "../types/Cloudtasks_QueueStackdriverLoggingConfig";
import {
  Cloudtasks_QueueAppEngineRoutingOverride,
  Cloudtasks_QueueAppEngineRoutingOverride_GetTypes,
} from "../types/Cloudtasks_QueueAppEngineRoutingOverride";
import {
  Cloudtasks_QueueRateLimits,
  Cloudtasks_QueueRateLimits_GetTypes,
} from "../types/Cloudtasks_QueueRateLimits";
import {
  Cloudtasks_QueueRetryConfig,
  Cloudtasks_QueueRetryConfig_GetTypes,
} from "../types/Cloudtasks_QueueRetryConfig";

export interface QueueArgs {
  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  StackdriverLoggingConfig?: Cloudtasks_QueueStackdriverLoggingConfig;

  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  AppEngineRoutingOverride?: Cloudtasks_QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  Location?: string;

  // The queue name.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Rate limits for task dispatches.
The queue's actual dispatch rate is the result of:
- Number of tasks in the queue
- User-specified throttling: rateLimits, retryConfig, and the queue's state.
- System throttling due to 429 (Too Many Requests) or 503 (Service
Unavailable) responses from the worker, high error rates, or to
smooth sudden large traffic spikes.
Structure is documented below.
*/
  RateLimits?: Cloudtasks_QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  RetryConfig?: Cloudtasks_QueueRetryConfig;
}
export class Queue extends Resource {
  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  public AppEngineRoutingOverride?: Cloudtasks_QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  public Location?: string;

  // The queue name.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Rate limits for task dispatches.
The queue's actual dispatch rate is the result of:
- Number of tasks in the queue
- User-specified throttling: rateLimits, retryConfig, and the queue's state.
- System throttling due to 429 (Too Many Requests) or 503 (Service
Unavailable) responses from the worker, high error rates, or to
smooth sudden large traffic spikes.
Structure is documented below.
*/
  public RateLimits?: Cloudtasks_QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  public RetryConfig?: Cloudtasks_QueueRetryConfig;

  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  public StackdriverLoggingConfig?: Cloudtasks_QueueStackdriverLoggingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "RateLimits",
        "Rate limits for task dispatches.\nThe queue's actual dispatch rate is the result of:\n* Number of tasks in the queue\n* User-specified throttling: rateLimits, retryConfig, and the queue's state.\n* System throttling due to 429 (Too Many Requests) or 503 (Service\nUnavailable) responses from the worker, high error rates, or to\nsmooth sudden large traffic spikes.\nStructure is documented below.",
        Cloudtasks_QueueRateLimits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RetryConfig",
        "Settings that determine the retry behavior.\nStructure is documented below.",
        Cloudtasks_QueueRetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "StackdriverLoggingConfig",
        "Configuration options for writing logs to Stackdriver Logging.\nStructure is documented below.",
        Cloudtasks_QueueStackdriverLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AppEngineRoutingOverride",
        "Overrides for task-level appEngineRouting. These settings apply only\nto App Engine tasks in this queue\nStructure is documented below.",
        Cloudtasks_QueueAppEngineRoutingOverride_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the queue\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The queue name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
