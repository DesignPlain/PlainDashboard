import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  mskconnect_CustomPluginLocation,
  mskconnect_CustomPluginLocation_GetTypes,
} from "../types/mskconnect_CustomPluginLocation";

export interface CustomPluginArgs {
  /*
Information about the location of a custom plugin. See below.

The following arguments are optional:
*/
  location?: mskconnect_CustomPluginLocation;

  // The name of the custom plugin..
  name?: string;

  // The type of the plugin file. Allowed values are `ZIP` and `JAR`.
  contentType?: string;

  // A summary description of the custom plugin.
  description?: string;
}
export class CustomPlugin extends Resource {
  /*
Information about the location of a custom plugin. See below.

The following arguments are optional:
*/
  public location?: mskconnect_CustomPluginLocation;

  // The name of the custom plugin..
  public name?: string;

  // the state of the custom plugin.
  public state?: string;

  // the Amazon Resource Name (ARN) of the custom plugin.
  public arn?: string;

  // The type of the plugin file. Allowed values are `ZIP` and `JAR`.
  public contentType?: string;

  // A summary description of the custom plugin.
  public description?: string;

  // an ID of the latest successfully created revision of the custom plugin.
  public latestRevision?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "location",
        "Information about the location of a custom plugin. See below.\n\nThe following arguments are optional:",
        mskconnect_CustomPluginLocation_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the custom plugin..",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "The type of the plugin file. Allowed values are `ZIP` and `JAR`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A summary description of the custom plugin.",
        [],
        false,
        true,
      ),
    ];
  }
}
