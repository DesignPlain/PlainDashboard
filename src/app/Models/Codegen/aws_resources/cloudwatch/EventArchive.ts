import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EventArchiveArgs {
  // The description of the new event archive.
  description?: string;

  // Instructs the new event archive to only capture events matched by this pattern. By default, it attempts to archive every event received in the `event_source_arn`.
  eventPattern?: string;

  // Event bus source ARN from where these events should be archived.
  eventSourceArn?: string;

  // The name of the new event archive. The archive name cannot exceed 48 characters.
  name?: string;

  // The maximum number of days to retain events in the new event archive. By default, it archives indefinitely.
  retentionDays?: number;
}
export class EventArchive extends Resource {
  // The name of the new event archive. The archive name cannot exceed 48 characters.
  public name?: string;

  // The maximum number of days to retain events in the new event archive. By default, it archives indefinitely.
  public retentionDays?: number;

  // The Amazon Resource Name (ARN) of the event archive.
  public arn?: string;

  // The description of the new event archive.
  public description?: string;

  // Instructs the new event archive to only capture events matched by this pattern. By default, it attempts to archive every event received in the `event_source_arn`.
  public eventPattern?: string;

  // Event bus source ARN from where these events should be archived.
  public eventSourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "eventSourceArn",
        "Event bus source ARN from where these events should be archived.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the new event archive. The archive name cannot exceed 48 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionDays",
        "The maximum number of days to retain events in the new event archive. By default, it archives indefinitely.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the new event archive.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventPattern",
        "Instructs the new event archive to only capture events matched by this pattern. By default, it attempts to archive every event received in the `event_source_arn`.",
        [],
        false,
        false,
      ),
    ];
  }
}
