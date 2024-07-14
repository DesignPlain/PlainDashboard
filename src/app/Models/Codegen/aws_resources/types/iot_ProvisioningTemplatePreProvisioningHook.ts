import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_ProvisioningTemplatePreProvisioningHook {
  // The version of the payload that was sent to the target function. The only valid (and the default) payload version is `"2020-04-01"`.
  payloadVersion?: string;

  // The ARN of the target function.
  targetArn?: string;
}

export function iot_ProvisioningTemplatePreProvisioningHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "payloadVersion",
      'The version of the payload that was sent to the target function. The only valid (and the default) payload version is `"2020-04-01"`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetArn",
      "The ARN of the target function.",
      [],
      true,
      false,
    ),
  ];
}
