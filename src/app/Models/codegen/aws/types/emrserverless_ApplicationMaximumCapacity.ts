import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emrserverless_ApplicationMaximumCapacity {
  // The maximum allowed CPU for an application.
  cpu?: string;

  // The maximum allowed disk for an application.
  disk?: string;

  // The maximum allowed resources for an application.
  memory?: string;
}

export function emrserverless_ApplicationMaximumCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "The maximum allowed CPU for an application.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "disk",
      "The maximum allowed disk for an application.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memory",
      "The maximum allowed resources for an application.",
      () => [],
      true,
      false,
    ),
  ];
}
