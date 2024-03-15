import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TransferJobSchedule } from "../types/TransferJobSchedule";
import { TransferJobTransferSpec } from "../types/TransferJobTransferSpec";
import { TransferJobEventStream } from "../types/TransferJobEventStream";
import { TransferJobNotificationConfig } from "../types/TransferJobNotificationConfig";

export interface TransferJobArgs {
  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  Status?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  TransferSpec?: TransferJobTransferSpec;

  // Unique description to identify the Transfer Job.
  Description?: string;

  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  EventStream?: TransferJobEventStream;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  Name?: string;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  NotificationConfig?: TransferJobNotificationConfig;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  Schedule?: TransferJobSchedule;
}
export class TransferJob extends Resource {
  // Unique description to identify the Transfer Job.
  public Description?: string;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  public Schedule?: TransferJobSchedule;

  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  public Status?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  public TransferSpec?: TransferJobTransferSpec;

  // When the Transfer Job was created.
  public CreationTime?: string;

  // When the Transfer Job was deleted.
  public DeletionTime?: string;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  public Name?: string;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  public NotificationConfig?: TransferJobNotificationConfig;

  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  public EventStream?: TransferJobEventStream;

  // When the Transfer Job was last modified.
  public LastModificationTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Schedule",
        "Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Status",
        "Status of the job. Default: `ENABLED`. **NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.**",
      ),
      new DynamicUIProps(
        InputType.String,
        "TransferSpec",
        "Transfer specification. Structure documented below.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Unique description to identify the Transfer Job.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventStream",
        "Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.',
      ),
      new DynamicUIProps(
        InputType.String,
        "NotificationConfig",
        "Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
    ];
  }
}
