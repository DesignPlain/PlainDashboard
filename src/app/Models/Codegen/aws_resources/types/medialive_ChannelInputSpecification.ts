import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelInputSpecification {
  //
  codec?: string;

  //
  inputResolution?: string;

  //
  maximumBitrate?: string;
}

export function medialive_ChannelInputSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "codec", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "inputResolution",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "maximumBitrate", "", [], true, false),
  ];
}
