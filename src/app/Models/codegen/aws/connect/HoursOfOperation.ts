import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  connect_HoursOfOperationConfig,
  connect_HoursOfOperationConfig_GetTypes,
} from "../types/connect_HoursOfOperationConfig";

export interface HoursOfOperationArgs {
  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Hours of Operation.
  name?: string;

  // Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the time zone of the Hours of Operation.
  timeZone?: string;

  // One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.
  configs?: Array<connect_HoursOfOperationConfig>;

  // Specifies the description of the Hours of Operation.
  description?: string;
}
export class HoursOfOperation extends DS_Resource {
  // One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.
  public configs?: Array<connect_HoursOfOperationConfig>;

  // Specifies the description of the Hours of Operation.
  public description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Hours of Operation.
  public arn?: string;

  // Specifies the name of the Hours of Operation.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies the time zone of the Hours of Operation.
  public timeZone?: string;

  // The identifier for the hours of operation.
  public hoursOfOperationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Specifies the time zone of the Hours of Operation.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "configs",
        "One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.",
        () => connect_HoursOfOperationConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Hours of Operation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Hours of Operation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
