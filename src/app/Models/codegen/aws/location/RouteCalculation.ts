import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RouteCalculationArgs {
  // The optional description for the route calculator resource.
  description?: string;

  // Key-value tags for the route calculator. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the route calculator resource.
  calculatorName?: string;

  /*
Specifies the data provider of traffic and road network data.

The following arguments are optional:
*/
  dataSource?: string;
}
export class RouteCalculation extends DS_Resource {
  // The timestamp for when the route calculator resource was last update in ISO 8601.
  public updateTime?: string;

  // The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you specify a resource across AWS.
  public calculatorArn?: string;

  // The name of the route calculator resource.
  public calculatorName?: string;

  // The timestamp for when the route calculator resource was created in ISO 8601 format.
  public createTime?: string;

  /*
Specifies the data provider of traffic and road network data.

The following arguments are optional:
*/
  public dataSource?: string;

  // The optional description for the route calculator resource.
  public description?: string;

  // Key-value tags for the route calculator. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "calculatorName",
        "The name of the route calculator resource.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataSource",
        "Specifies the data provider of traffic and road network data.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The optional description for the route calculator resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the route calculator. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
