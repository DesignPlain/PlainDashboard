export interface QueueRateLimits {
  /*
(Output)
The max burst size.
Max burst size limits how fast tasks in queue are processed when many tasks are
in the queue and the rate is high. This field allows the queue to have a high
rate so processing starts shortly after a task is enqueued, but still limits
resource usage when many tasks are enqueued in a short period of time.
*/
  MaxBurstSize?: number;

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
}
