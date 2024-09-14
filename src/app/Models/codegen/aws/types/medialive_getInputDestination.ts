import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_getInputDestinationVpc,
  medialive_getInputDestinationVpc_GetTypes,
} from "./medialive_getInputDestinationVpc";

export interface medialive_getInputDestination {
  //
  port?: string;

  //
  url?: string;

  //
  vpcs?: Array<medialive_getInputDestinationVpc>;

  //
  ip?: string;
}

export function medialive_getInputDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "port", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "url", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "vpcs",
      "",
      () => medialive_getInputDestinationVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "ip", "", () => [], true, false),
  ];
}
