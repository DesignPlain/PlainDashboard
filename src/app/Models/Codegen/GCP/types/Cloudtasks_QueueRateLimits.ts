import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudtasks_QueueRateLimits {
  /*
The maximum number of concurrent tasks that Cloud Tasks allows to
be dispatched for this queue. After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.
*/
  MaxConcurrentDispatches?: number;

  /*
The maximum rate at which tasks are dispatched from this queue.
If unspecified when the queue is created, Cloud Tasks will pick the default.
*/
  MaxDispatchesPerSecond?: number;

  /*
(Output)
The max burst size.
Max burst size limits how fast tasks in queue are processed when many tasks are
in the queue and the rate is high. This field allows the queue to have a high
rate so processing starts shortly after a task is enqueued, but still limits
resource usage when many tasks are enqueued in a short period of time.
*/
  MaxBurstSize?: number;
}

export function Cloudtasks_QueueRateLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxConcurrentDispatches",
      "The maximum number of concurrent tasks that Cloud Tasks allows to\nbe dispatched for this queue. After this threshold has been\nreached, Cloud Tasks stops dispatching tasks until the number of\nconcurrent requests decreases.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxDispatchesPerSecond",
      "The maximum rate at which tasks are dispatched from this queue.\nIf unspecified when the queue is created, Cloud Tasks will pick the default.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxBurstSize",
      "(Output)\nThe max burst size.\nMax burst size limits how fast tasks in queue are processed when many tasks are\nin the queue and the rate is high. This field allows the queue to have a high\nrate so processing starts shortly after a task is enqueued, but still limits\nresource usage when many tasks are enqueued in a short period of time.",
      [],
      false,
      false,
    ),
  ];
}
