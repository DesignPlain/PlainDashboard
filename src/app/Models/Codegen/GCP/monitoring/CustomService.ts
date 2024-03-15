import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CustomServiceTelemetry } from "../types/CustomServiceTelemetry";

export interface CustomServiceArgs {
  /*
An optional service ID to use. If not given, the server will generate a
service ID.
*/
  ServiceId?: string;

  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  Telemetry?: CustomServiceTelemetry;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  UserLabels?: Map<string, string>;

  // Name used for UI elements listing this Service.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class CustomService extends Resource {
  /*
The full resource name for this service. The syntax is:
projects/[PROJECT_ID]/services/[SERVICE_ID].
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An optional service ID to use. If not given, the server will generate a
service ID.
*/
  public ServiceId?: string;

  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  public Telemetry?: CustomServiceTelemetry;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  public UserLabels?: Map<string, string>;

  // Name used for UI elements listing this Service.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Name used for UI elements listing this Service.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "An optional service ID to use. If not given, the server will generate a\nservice ID.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Telemetry",
        "Configuration for how to query telemetry on a Service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UserLabels",
        "Labels which have been used to annotate the service. Label keys must start\nwith a letter. Label keys and values may contain lowercase letters,\nnumbers, underscores, and dashes. Label keys and values have a maximum\nlength of 63 characters, and must be less than 128 bytes in size. Up to 64\nlabel entries may be stored. For labels which do not have a semantic value,\nthe empty string may be supplied for the label value.",
      ),
    ];
  }
}
