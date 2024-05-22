import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_getDomainSoftwareUpdateOption {
  // Enabled or disabled.
  autoSoftwareUpdateEnabled?: boolean;
}

export function opensearch_getDomainSoftwareUpdateOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoSoftwareUpdateEnabled",
      "Enabled or disabled.",
      [],
      true,
      false,
    ),
  ];
}
