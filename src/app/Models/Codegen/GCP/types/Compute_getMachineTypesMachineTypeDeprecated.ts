import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getMachineTypesMachineTypeDeprecated {
  // The URL of the suggested replacement for a deprecated machine type.
  Replacement?: string;

  // The deprecation state of this resource. This can be `ACTIVE`, `DEPRECATED`, `OBSOLETE`, or `DELETED`.
  State?: string;
}

export function Compute_getMachineTypesMachineTypeDeprecated_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Replacement",
      "The URL of the suggested replacement for a deprecated machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "The deprecation state of this resource. This can be `ACTIVE`, `DEPRECATED`, `OBSOLETE`, or `DELETED`.",
      [],
      true,
      false,
    ),
  ];
}
