import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface workstations_WorkstationConfigContainer {
  // Docker image defining the container. This image must be accessible by the config's service account.
  image?: string;

  // If set, overrides the USER specified in the image with the given uid.
  runAsUser?: number;

  // If set, overrides the default DIR specified by the image.
  workingDir?: string;

  // Arguments passed to the entrypoint.
  args?: Array<string>;

  // If set, overrides the default ENTRYPOINT specified by the image.
  commands?: Array<string>;

  /*
Environment variables passed to the container.
The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
*/
  env?: Map<string, string>;
}

export function workstations_WorkstationConfigContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "image",
      "Docker image defining the container. This image must be accessible by the config's service account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "runAsUser",
      "If set, overrides the USER specified in the image with the given uid.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDir",
      "If set, overrides the default DIR specified by the image.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments passed to the entrypoint.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "If set, overrides the default ENTRYPOINT specified by the image.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "env",
      'Environment variables passed to the container.\nThe elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
