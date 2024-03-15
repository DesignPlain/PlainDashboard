export interface JobAppEngineHttpTargetAppEngineRouting {
  /*
App instance.
By default, the job is sent to an instance which is available when the job is attempted.
*/
  Instance?: string;

  /*
App service.
By default, the job is sent to the service which is the default service when the job is attempted.
*/
  Service?: string;

  /*
App version.
By default, the job is sent to the version which is the default version when the job is attempted.
*/
  Version?: string;
}
