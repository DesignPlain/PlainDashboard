import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { QueueRateLimits } from "../types/QueueRateLimits";
import { QueueRetryConfig } from "../types/QueueRetryConfig";
import { QueueStackdriverLoggingConfig } from "../types/QueueStackdriverLoggingConfig";
import { QueueAppEngineRoutingOverride } from "../types/QueueAppEngineRoutingOverride";

export interface QueueArgs {
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
  RateLimits?: QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  RetryConfig?: QueueRetryConfig;

  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  StackdriverLoggingConfig?: QueueStackdriverLoggingConfig;

  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  AppEngineRoutingOverride?: QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  Location?: string;

  // The queue name.
  Name?: string;
}
export class Queue extends Resource {
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
  public RateLimits?: QueueRateLimits;

  /*
Settings that determine the retry behavior.
Structure is documented below.
*/
  public RetryConfig?: QueueRetryConfig;

  /*
Configuration options for writing logs to Stackdriver Logging.
Structure is documented below.
*/
  public StackdriverLoggingConfig?: QueueStackdriverLoggingConfig;

  /*
Overrides for task-level appEngineRouting. These settings apply only
to App Engine tasks in this queue
Structure is documented below.
*/
  public AppEngineRoutingOverride?: QueueAppEngineRoutingOverride;

  /*
The location of the queue


- - -
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AppEngineRoutingOverride",
        "Overrides for task-level appEngineRouting. These settings apply only\nto App Engine tasks in this queue\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the queue\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Name", "The queue name."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RateLimits",
        "Rate limits for task dispatches.\nThe queue's actual dispatch rate is the result of:\n* Number of tasks in the queue\n* User-specified throttling: rateLimits, retryConfig, and the queue's state.\n* System throttling due to 429 (Too Many Requests) or 503 (Service\nUnavailable) responses from the worker, high error rates, or to\nsmooth sudden large traffic spikes.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RetryConfig",
        "Settings that determine the retry behavior.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StackdriverLoggingConfig",
        "Configuration options for writing logs to Stackdriver Logging.\nStructure is documented below.",
      ),
    ];
  }
}
