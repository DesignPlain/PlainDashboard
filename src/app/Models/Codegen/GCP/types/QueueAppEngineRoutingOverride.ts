export interface QueueAppEngineRoutingOverride {
  /*
App instance.
By default, the task is sent to an instance which is available when the task is attempted.
*/
  Instance?: string;

  /*
App service.
By default, the task is sent to the service which is the default service when the task is attempted.
*/
  Service?: string;

  /*
App version.
By default, the task is sent to the version which is the default version when the task is attempted.
*/
  Version?: string;

  /*
(Output)
The host that the task is sent to.
*/
  Host?: string;
}
