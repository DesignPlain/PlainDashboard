import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codecommit_TriggerTrigger {
  // The branches that will be included in the trigger configuration. If no branches   are specified, the trigger will apply to all branches.
  branches?: Array<string>;

  // Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.
  customData?: string;

  // The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).
  destinationArn?: string;

  // The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). If no events are specified, the trigger will run for all repository events. Event types include: `all`, `updateReference`, `createReference`, `deleteReference`.
  events?: Array<string>;

  // The name of the trigger.
  name?: string;
}

export function codecommit_TriggerTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "branches",
      "The branches that will be included in the trigger configuration. If no branches   are specified, the trigger will apply to all branches.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "customData",
      "Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationArn",
      "The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "events",
      "The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). If no events are specified, the trigger will run for all repository events. Event types include: `all`, `updateReference`, `createReference`, `deleteReference`.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the trigger.",
      [],
      true,
      true,
    ),
  ];
}
