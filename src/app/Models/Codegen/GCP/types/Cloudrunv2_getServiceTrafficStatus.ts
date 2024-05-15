import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getServiceTrafficStatus {
  // Specifies percent of the traffic to this Revision.
  Percent?: number;

  // Revision to which this traffic is sent.
  Revision?: string;

  // Indicates the string used in the URI to exclusively reference this target.
  Tag?: string;

  // The allocation type for this traffic target.
  Type?: string;

  // Displays the target URI.
  Uri?: string;
}

export function Cloudrunv2_getServiceTrafficStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Revision",
      "Revision to which this traffic is sent.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "Indicates the string used in the URI to exclusively reference this target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The allocation type for this traffic target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "Displays the target URI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percent",
      "Specifies percent of the traffic to this Revision.",
      [],
      true,
      false,
    ),
  ];
}
