import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_getQueueOutboundCallerConfig {
  // Specifies the caller ID number.
  outboundCallerIdNumberId?: string;

  // Outbound whisper flow to be used during an outbound call.
  outboundFlowId?: string;

  // Specifies the caller ID name.
  outboundCallerIdName?: string;
}

export function connect_getQueueOutboundCallerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'outboundCallerIdName',
      'Specifies the caller ID name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outboundCallerIdNumberId',
      'Specifies the caller ID number.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outboundFlowId',
      'Outbound whisper flow to be used during an outbound call.',
      () => [],
      true,
      false,
    ),
  ];
}
