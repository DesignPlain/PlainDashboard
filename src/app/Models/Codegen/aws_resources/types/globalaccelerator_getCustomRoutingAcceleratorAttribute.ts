import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface globalaccelerator_getCustomRoutingAcceleratorAttribute {
  //
  flowLogsEnabled?: boolean;

  //
  flowLogsS3Bucket?: string;

  //
  flowLogsS3Prefix?: string;
}

export function globalaccelerator_getCustomRoutingAcceleratorAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "flowLogsEnabled", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "flowLogsS3Bucket",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "flowLogsS3Prefix",
      "",
      [],
      true,
      false,
    ),
  ];
}
