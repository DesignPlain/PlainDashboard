import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_getServiceTrafficStatus {
  // Specifies percent of the traffic to this Revision.
  percent?: number;

  // Revision to which this traffic is sent.
  revision?: string;

  // Indicates the string used in the URI to exclusively reference this target.
  tag?: string;

  // The allocation type for this traffic target.
  type?: string;

  // Displays the target URI.
  uri?: string;
}

export function cloudrunv2_getServiceTrafficStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The allocation type for this traffic target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "Displays the target URI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Specifies percent of the traffic to this Revision.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "Revision to which this traffic is sent.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Indicates the string used in the URI to exclusively reference this target.",
      [],
      true,
      false,
    ),
  ];
}
