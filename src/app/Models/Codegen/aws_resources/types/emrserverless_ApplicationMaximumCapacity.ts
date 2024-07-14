import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emrserverless_ApplicationMaximumCapacity {
  // The maximum allowed resources for an application.
  memory?: string;

  // The maximum allowed CPU for an application.
  cpu?: string;

  // The maximum allowed disk for an application.
  disk?: string;
}

export function emrserverless_ApplicationMaximumCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "memory",
      "The maximum allowed resources for an application.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "The maximum allowed CPU for an application.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "disk",
      "The maximum allowed disk for an application.",
      [],
      false,
      false,
    ),
  ];
}
