import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_TransferJobNotificationConfig,
  storage_TransferJobNotificationConfig_GetTypes,
} from "../types/storage_TransferJobNotificationConfig";
import {
  storage_TransferJobSchedule,
  storage_TransferJobSchedule_GetTypes,
} from "../types/storage_TransferJobSchedule";
import {
  storage_TransferJobTransferSpec,
  storage_TransferJobTransferSpec_GetTypes,
} from "../types/storage_TransferJobTransferSpec";
import {
  storage_TransferJobEventStream,
  storage_TransferJobEventStream_GetTypes,
} from "../types/storage_TransferJobEventStream";

export interface TransferJobArgs {
  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  eventStream?: storage_TransferJobEventStream;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  name?: string;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  notificationConfig?: storage_TransferJobNotificationConfig;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  schedule?: storage_TransferJobSchedule;

  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  status?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  transferSpec?: storage_TransferJobTransferSpec;

  // Unique description to identify the Transfer Job.
  description?: string;
}
export class TransferJob extends Resource {
  // Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.
  public eventStream?: storage_TransferJobEventStream;

  // When the Transfer Job was last modified.
  public lastModificationTime?: string;

  // The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]-[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.
  public name?: string;

  // Status of the job. Default: `ENABLED`. --NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.--
  public status?: string;

  // When the Transfer Job was created.
  public creationTime?: string;

  // When the Transfer Job was deleted.
  public deletionTime?: string;

  // Unique description to identify the Transfer Job.
  public description?: string;

  /*
Transfer specification. Structure documented below.

- - -
*/
  public transferSpec?: storage_TransferJobTransferSpec;

  // Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.
  public notificationConfig?: storage_TransferJobNotificationConfig;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.
  public schedule?: storage_TransferJobSchedule;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "transferSpec",
        "Transfer specification. Structure documented below.\n\n- - -",
        storage_TransferJobTransferSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Unique description to identify the Transfer Job.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventStream",
        "Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. Structure documented below Either `event_stream` or `schedule` must be set.",
        storage_TransferJobEventStream_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        'The name of the Transfer Job. This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters ( `transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically ( `transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$` ). For all other transfer types, this name must not start with transferJobs/OPI. Default the provider will assign a random unique name with `transferJobs/{{name}}` format, where `name` is a numeric value.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationConfig",
        "Notification configuration. This is not supported for transfers involving PosixFilesystem. Structure documented below.",
        storage_TransferJobNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schedule",
        "Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. Structure documented below. Either `schedule` or `event_stream` must be set.",
        storage_TransferJobSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Status of the job. Default: `ENABLED`. **NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.**",
        [],
        false,
        false,
      ),
    ];
  }
}
