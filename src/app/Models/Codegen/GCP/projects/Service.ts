import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServiceArgs {
  /*
If `true`, services that are enabled
and which depend on this service should also be disabled when this service is
destroyed. If `false` or unset, an error will be generated if any enabled
services depend on this service when destroying it.
*/
  DisableDependentServices?: boolean;

  // If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.
  DisableOnDestroy?: boolean;

  /*
The project ID. If not provided, the provider project
is used.
*/
  Project?: string;

  // The service to enable.
  Service?: string;
}
export class Service extends Resource {
  /*
If `true`, services that are enabled
and which depend on this service should also be disabled when this service is
destroyed. If `false` or unset, an error will be generated if any enabled
services depend on this service when destroying it.
*/
  public DisableDependentServices?: boolean;

  // If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.
  public DisableOnDestroy?: boolean;

  /*
The project ID. If not provided, the provider project
is used.
*/
  public Project?: string;

  // The service to enable.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "DisableDependentServices",
        "If `true`, services that are enabled\nand which depend on this service should also be disabled when this service is\ndestroyed. If `false` or unset, an error will be generated if any enabled\nservices depend on this service when destroying it.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DisableOnDestroy",
        "If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project ID. If not provided, the provider project\nis used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The service to enable.",
        [],
        true,
        true,
      ),
    ];
  }
}
