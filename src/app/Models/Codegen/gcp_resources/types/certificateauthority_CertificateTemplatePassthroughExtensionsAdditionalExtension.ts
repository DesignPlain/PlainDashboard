import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension {
  // Required. The parts of an OID path. The most significant parts of the path come first.
  objectIdPaths?: Array<number>;
}

export function certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "objectIdPaths",
      "Required. The parts of an OID path. The most significant parts of the path come first.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
