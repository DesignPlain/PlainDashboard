import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateScaling {
  // Maximum number of serving instances that this resource should have.
  MaxInstanceCount?: number;

  // Minimum number of serving instances that this resource should have.
  MinInstanceCount?: number;
}

export function Cloudrunv2_ServiceTemplateScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceCount",
      "Maximum number of serving instances that this resource should have.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinInstanceCount",
      "Minimum number of serving instances that this resource should have.",
      [],
      false,
      false,
    ),
  ];
}
