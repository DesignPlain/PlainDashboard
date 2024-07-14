import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SnapshotScheduleArgs {
  // The definition of the snapshot schedule. The definition is made up of schedule expressions, for example `cron(30 12 -)` or `rate(12 hours)`.
  definitions?: Array<string>;

  // The description of the snapshot schedule.
  description?: string;

  // Whether to destroy all associated clusters with this snapshot schedule on deletion. Must be enabled and applied before attempting deletion.
  forceDestroy?: boolean;

  // The snapshot schedule identifier. If omitted, this provider will assign a random, unique identifier.
  identifier?: string;

  /*
Creates a unique
identifier beginning with the specified prefix. Conflicts with `identifier`.
*/
  identifierPrefix?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class SnapshotSchedule extends Resource {
  // Amazon Resource Name (ARN) of the Redshift Snapshot Schedule.
  public arn?: string;

  // The definition of the snapshot schedule. The definition is made up of schedule expressions, for example `cron(30 12 -)` or `rate(12 hours)`.
  public definitions?: Array<string>;

  // The description of the snapshot schedule.
  public description?: string;

  // Whether to destroy all associated clusters with this snapshot schedule on deletion. Must be enabled and applied before attempting deletion.
  public forceDestroy?: boolean;

  // The snapshot schedule identifier. If omitted, this provider will assign a random, unique identifier.
  public identifier?: string;

  /*
Creates a unique
identifier beginning with the specified prefix. Conflicts with `identifier`.
*/
  public identifierPrefix?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the snapshot schedule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Whether to destroy all associated clusters with this snapshot schedule on deletion. Must be enabled and applied before attempting deletion.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "The snapshot schedule identifier. If omitted, this provider will assign a random, unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifierPrefix",
        "Creates a unique\nidentifier beginning with the specified prefix. Conflicts with `identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "definitions",
        "The definition of the snapshot schedule. The definition is made up of schedule expressions, for example `cron(30 12 *)` or `rate(12 hours)`.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
