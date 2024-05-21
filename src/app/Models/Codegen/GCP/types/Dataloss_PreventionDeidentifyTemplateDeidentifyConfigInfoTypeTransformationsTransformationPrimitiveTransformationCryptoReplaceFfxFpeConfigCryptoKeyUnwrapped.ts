import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped {
  /*
A 128/192/256 bit key.
A base64-encoded string.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  key?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "A 128/192/256 bit key.\nA base64-encoded string.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
  ];
}
