import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  servicecatalog_ServiceActionDefinition,
  servicecatalog_ServiceActionDefinition_GetTypes,
} from "../types/servicecatalog_ServiceActionDefinition";

export interface ServiceActionArgs {
  // Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.
  acceptLanguage?: string;

  // Self-service action definition configuration block. Detailed below.
  definition?: servicecatalog_ServiceActionDefinition;

  // Self-service action description.
  description?: string;

  /*
Self-service action name.

The following arguments are optional:
*/
  name?: string;
}
export class ServiceAction extends DS_Resource {
  // Self-service action definition configuration block. Detailed below.
  public definition?: servicecatalog_ServiceActionDefinition;

  // Self-service action description.
  public description?: string;

  /*
Self-service action name.

The following arguments are optional:
*/
  public name?: string;

  // Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.
  public acceptLanguage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "Self-service action definition configuration block. Detailed below.",
        () => servicecatalog_ServiceActionDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Self-service action description.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Self-service action name.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
    ];
  }
}
