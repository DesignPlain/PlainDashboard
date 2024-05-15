import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigContainer {
  // Arguments passed to the entrypoint.
  Args?: Array<string>;

  // If set, overrides the default ENTRYPOINT specified by the image.
  Commands?: Array<string>;

  /*
Environment variables passed to the container.
The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
*/
  Env?: Map<string, string>;

  // Docker image defining the container. This image must be accessible by the config's service account.
  Image?: string;

  // If set, overrides the USER specified in the image with the given uid.
  RunAsUser?: number;

  // If set, overrides the default DIR specified by the image.
  WorkingDir?: string;
}

export function Workstations_WorkstationConfigContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WorkingDir",
      "If set, overrides the default DIR specified by the image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments passed to the entrypoint.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Commands",
      "If set, overrides the default ENTRYPOINT specified by the image.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Env",
      'Environment variables passed to the container.\nThe elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Image",
      "Docker image defining the container. This image must be accessible by the config's service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RunAsUser",
      "If set, overrides the USER specified in the image with the given uid.",
      [],
      false,
      false,
    ),
  ];
}
