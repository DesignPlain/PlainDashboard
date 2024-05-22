import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelCdiInputSpecification {
  // Maximum CDI input resolution.
  resolution?: string;
}

export function medialive_ChannelCdiInputSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resolution",
      "Maximum CDI input resolution.",
      [],
      true,
      false,
    ),
  ];
}
