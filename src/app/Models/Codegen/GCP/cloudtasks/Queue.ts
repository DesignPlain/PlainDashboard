import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudtasks_QueueAppEngineRoutingOverride,
  cloudtasks_QueueAppEngineRoutingOverride_GetTypes,
} from "../types/cloudtasks_QueueAppEngineRoutingOverride";
import {
  cloudtasks_QueueRateLimits,
  cloudtasks_QueueRateLimits_GetTypes,
} from "../types/cloudtasks_QueueRateLimits";
import {
  cloudtasks_QueueRetryConfig,
  cloudtasks_QueueRetryConfig_GetTypes,
} from "../types/cloudtasks_QueueRetryConfig";
import {
  cloudtasks_QueueStackdriverLoggingConfig,
  cloudtasks_QueueStackdriverLoggingConfig_GetTypes,
} from "../types/cloudtasks_QueueStackdriverLoggingConfig";

export interface QueueArgs {
  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  appEngineRoutingOverride?: cloudtasks_QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  location?: string;

  // The queue name.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

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
  rateLimits?: cloudtasks_QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  retryConfig?: cloudtasks_QueueRetryConfig;

  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  stackdriverLoggingConfig?: cloudtasks_QueueStackdriverLoggingConfig;
}
export class Queue extends Resource {
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
  public rateLimits?: cloudtasks_QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  public retryConfig?: cloudtasks_QueueRetryConfig;

  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  public stackdriverLoggingConfig?: cloudtasks_QueueStackdriverLoggingConfig;

  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  public appEngineRoutingOverride?: cloudtasks_QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  public location?: string;

  // The queue name.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rateLimits",
        "Rate limits for task dispatches.\nThe queue's actual dispatch rate is the result of:\n* Number of tasks in the queue\n* User-specified throttling: rateLimits, retryConfig, and the queue's state.\n* System throttling due to 429 (Too Many Requests) or 503 (Service\nUnavailable) responses from the worker, high error rates, or to\nsmooth sudden large traffic spikes.\nStructure is documented below.",
        cloudtasks_QueueRateLimits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retryConfig",
        "Settings that determine the retry behavior.\nStructure is documented below.",
        cloudtasks_QueueRetryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stackdriverLoggingConfig",
        "Configuration options for writing logs to Stackdriver Logging.\nStructure is documented below.",
        cloudtasks_QueueStackdriverLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "appEngineRoutingOverride",
        "Overrides for task-level appEngineRouting. These settings apply only\nto App Engine tasks in this queue\nStructure is documented below.",
        cloudtasks_QueueAppEngineRoutingOverride_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the queue\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The queue name.",
        [],
        false,
        true,
      ),
    ];
  }
}
