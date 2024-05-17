import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_TransferJobSchedule,
  Storage_TransferJobSchedule_GetTypes,
} from "../types/Storage_TransferJobSchedule";
import {
  Storage_TransferJobTransferSpec,
  Storage_TransferJobTransferSpec_GetTypes,
} from "../types/Storage_TransferJobTransferSpec";
import {
  Storage_TransferJobEventStream,
  Storage_TransferJobEventStream_GetTypes,
} from "../types/Storage_TransferJobEventStream";
import {
  Storage_TransferJobNotificationConfig,
  Storage_TransferJobNotificationConfig_GetTypes,
} from "../types/Storage_TransferJobNotificationConfig";

export interface TransferJobArgs {
  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  Schedule?: Storage_TransferJobSchedule;

  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  Status?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  TransferSpec?: Storage_TransferJobTransferSpec;

  // Unique description to identify the Transfer Job.
  Description?: string;

  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  EventStream?: Storage_TransferJobEventStream;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  Name?: string;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  NotificationConfig?: Storage_TransferJobNotificationConfig;
}
export class TransferJob extends Resource {
  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  public EventStream?: Storage_TransferJobEventStream;

  // When the Transfer Job was last modified.
  public LastModificationTime?: string;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  public Name?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  public Schedule?: Storage_TransferJobSchedule;

  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  public Status?: string;

  // Unique description to identify the Transfer Job.
  public Description?: string;

  // When the Transfer Job was deleted.
  public DeletionTime?: string;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  public NotificationConfig?: Storage_TransferJobNotificationConfig;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  public TransferSpec?: Storage_TransferJobTransferSpec;

  // When the Transfer Job was created.
  public CreationTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Status",
        "Status of the job. Default: `ENABLED`. **NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.**",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TransferSpec",
        "Transfer specification. Structure documented below.\n\n- - -",
        Storage_TransferJobTransferSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Unique description to identify the Transfer Job.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EventStream",
        "Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.",
        Storage_TransferJobEventStream_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NotificationConfig",
        "Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.",
        Storage_TransferJobNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Schedule",
        "Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.",
        Storage_TransferJobSchedule_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
