import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ServiceArgs {
  /*
If `true`, services that are enabled
and which depend on this service should also be disabled when this service is
destroyed. If `false` or unset, an error will be generated if any enabled
services depend on this service when destroying it.
*/
  disableDependentServices?: boolean;

  // If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.
  disableOnDestroy?: boolean;

  /*
The project ID. If not provided, the provider project
is used.
*/
  project?: string;

  // The service to enable.
  service?: string;
}
export class Service extends DS_Resource {
  /*
If `true`, services that are enabled
and which depend on this service should also be disabled when this service is
destroyed. If `false` or unset, an error will be generated if any enabled
services depend on this service when destroying it.
*/
  public disableDependentServices?: boolean;

  // If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.
  public disableOnDestroy?: boolean;

  /*
The project ID. If not provided, the provider project
is used.
*/
  public project?: string;

  // The service to enable.
  public service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "service",
        "The service to enable.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableDependentServices",
        "If `true`, services that are enabled\nand which depend on this service should also be disabled when this service is\ndestroyed. If `false` or unset, an error will be generated if any enabled\nservices depend on this service when destroying it.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableOnDestroy",
        "If true, disable the service when the resource is destroyed. Defaults to true. May be useful in the event that a project is long-lived but the infrastructure running in that project changes frequently.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project ID. If not provided, the provider project\nis used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
