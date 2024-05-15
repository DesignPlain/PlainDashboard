import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigHttpCheckAuthInfo {
  /*
The password to authenticate.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The username to authenticate.
  Username?: string;
}

export function Monitoring_UptimeCheckConfigHttpCheckAuthInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Password",
      "The password to authenticate.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "The username to authenticate.",
      [],
      true,
      false,
    ),
  ];
}
