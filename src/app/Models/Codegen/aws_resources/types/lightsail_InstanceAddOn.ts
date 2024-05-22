import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lightsail_InstanceAddOn {
  // The daily time when an automatic snapshot will be created. Must be in HH:00 format, and in an hourly increment and specified in Coordinated Universal Time (UTC). The snapshot will be automatically created between the time specified and up to 45 minutes after.
  snapshotTime?: string;

  // The status of the add on. Valid Values: `Enabled`, `Disabled`.
  status?: string;

  // The add-on type. There is currently only one valid type `AutoSnapshot`.
  type?: string;
}

export function lightsail_InstanceAddOn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the add on. Valid Values: `Enabled`, `Disabled`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The add-on type. There is currently only one valid type `AutoSnapshot`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotTime",
      "The daily time when an automatic snapshot will be created. Must be in HH:00 format, and in an hourly increment and specified in Coordinated Universal Time (UTC). The snapshot will be automatically created between the time specified and up to 45 minutes after.",
      [],
      true,
      false,
    ),
  ];
}
