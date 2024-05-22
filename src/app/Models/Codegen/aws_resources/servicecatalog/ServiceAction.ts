import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  servicecatalog_ServiceActionDefinition,
  servicecatalog_ServiceActionDefinition_GetTypes,
} from "../types/servicecatalog_ServiceActionDefinition";

export interface ServiceActionArgs {
  // Self-service action definition configuration block. Detailed below.
  definition?: servicecatalog_ServiceActionDefinition;

  // Self-service action description.
  description?: string;

  /*
Self-service action name.

The following arguments are optional:
*/
  name?: string;

  // Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.
  acceptLanguage?: string;
}
export class ServiceAction extends Resource {
  // Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.
  public acceptLanguage?: string;

  // Self-service action definition configuration block. Detailed below.
  public definition?: servicecatalog_ServiceActionDefinition;

  // Self-service action description.
  public description?: string;

  /*
Self-service action name.

The following arguments are optional:
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "Self-service action definition configuration block. Detailed below.",
        servicecatalog_ServiceActionDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Self-service action description.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Self-service action name.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`.",
        [],
        false,
        false,
      ),
    ];
  }
}
