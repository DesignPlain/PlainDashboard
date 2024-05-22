import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  connect_HoursOfOperationConfig,
  connect_HoursOfOperationConfig_GetTypes,
} from "../types/connect_HoursOfOperationConfig";

export interface HoursOfOperationArgs {
  // One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.
  configs?: Array<connect_HoursOfOperationConfig>;

  // Specifies the description of the Hours of Operation.
  description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Hours of Operation.
  name?: string;

  // Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the time zone of the Hours of Operation.
  timeZone?: string;
}
export class HoursOfOperation extends Resource {
  // The Amazon Resource Name (ARN) of the Hours of Operation.
  public arn?: string;

  // Specifies the description of the Hours of Operation.
  public description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies the time zone of the Hours of Operation.
  public timeZone?: string;

  // One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.
  public configs?: Array<connect_HoursOfOperationConfig>;

  // The identifier for the hours of operation.
  public hoursOfOperationId?: string;

  // Specifies the name of the Hours of Operation.
  public name?: string;

  // Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Hours of Operation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Hours of Operation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Specifies the time zone of the Hours of Operation.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "configs",
        "One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below.",
        connect_HoursOfOperationConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Hours of Operation.",
        [],
        false,
        false,
      ),
    ];
  }
}
