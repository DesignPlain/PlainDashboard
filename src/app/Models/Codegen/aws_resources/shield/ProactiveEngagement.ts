import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  shield_ProactiveEngagementEmergencyContact,
  shield_ProactiveEngagementEmergencyContact_GetTypes,
} from "../types/shield_ProactiveEngagementEmergencyContact";

export interface ProactiveEngagementArgs {
  // One or more emergency contacts. You must provide at least one phone number in the emergency contact list. See `emergency_contacts`.
  emergencyContacts?: Array<shield_ProactiveEngagementEmergencyContact>;

  // Boolean value indicating if Proactive Engagement should be enabled or not.
  enabled?: boolean;
}
export class ProactiveEngagement extends Resource {
  // One or more emergency contacts. You must provide at least one phone number in the emergency contact list. See `emergency_contacts`.
  public emergencyContacts?: Array<shield_ProactiveEngagementEmergencyContact>;

  // Boolean value indicating if Proactive Engagement should be enabled or not.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Boolean value indicating if Proactive Engagement should be enabled or not.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "emergencyContacts",
        "One or more emergency contacts. You must provide at least one phone number in the emergency contact list. See `emergency_contacts`.",
        shield_ProactiveEngagementEmergencyContact_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
