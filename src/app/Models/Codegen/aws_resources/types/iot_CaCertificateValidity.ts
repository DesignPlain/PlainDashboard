import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_CaCertificateValidity {
  // The certificate is not valid before this date.
  notBefore?: string;

  // The certificate is not valid after this date.
  notAfter?: string;
}

export function iot_CaCertificateValidity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "notBefore",
      "The certificate is not valid before this date.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "notAfter",
      "The certificate is not valid after this date.",
      [],
      false,
      false,
    ),
  ];
}
