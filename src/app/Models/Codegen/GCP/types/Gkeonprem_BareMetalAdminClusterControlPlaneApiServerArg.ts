import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg {
  // The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
  Argument?: string;

  // The value of the arg as it will be passed to the API Server command line.
  Value?: string;
}

export function Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Argument",
      "The argument name as it appears on the API Server command line please make sure to remove the leading dashes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of the arg as it will be passed to the API Server command line.",
      [],
      true,
      false,
    ),
  ];
}
