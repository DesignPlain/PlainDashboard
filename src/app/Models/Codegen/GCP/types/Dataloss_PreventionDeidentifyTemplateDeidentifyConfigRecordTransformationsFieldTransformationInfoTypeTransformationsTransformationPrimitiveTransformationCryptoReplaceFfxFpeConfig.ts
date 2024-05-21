import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigContext,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigContext_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigContext";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfig {
  /*
Common alphabets. Only one of this, `custom_alphabet` or `radix` must be specified.
Possible values are: `NUMERIC`, `HEXADECIMAL`, `UPPER_CASE_ALPHA_NUMERIC`, `ALPHA_NUMERIC`.
*/
  commonAlphabet?: string;

  /*
The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used.
If the context is set but:
1.  there is no record present when transforming a given value or
2.  the field is not present when transforming a given value,
a default tweak will be used.
Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string.
The tweak is constructed as a sequence of bytes in big endian byte order such that:
-   a 64 bit integer is encoded followed by a single byte of value 1
-   a string is encoded in UTF-8 format followed by a single byte of value 2
Structure is documented below.
*/
  context?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigContext;

  /*
The key used by the encryption algorithm.
Structure is documented below.
*/
  cryptoKey?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey;

  /*
This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range \[2, 95\]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is:
``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%!!(MISSING)^(MISSING)&-()_-+={[}]|:;"'<,>.?/``. Only one of this, `common_alphabet` or `radix` must be specified.
*/
  customAlphabet?: string;

  // The native way to select the alphabet. Must be in the range \[2, 95\]. Only one of this, `custom_alphabet` or `common_alphabet` must be specified.
  radix?: number;

  /*
The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info\_type\_name(surrogate\_character\_count):surrogate
For example, if the name of custom infoType is 'MY\_TOKEN\_INFO\_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY\_TOKEN\_INFO\_TYPE(3):abc'
This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text.
In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY\_TOKEN\_TYPE
Structure is documented below.
*/
  surrogateInfoType?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "surrogateInfoType",
      "The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info\\_type\\_name(surrogate\\_character\\_count):surrogate\nFor example, if the name of custom infoType is 'MY\\_TOKEN\\_INFO\\_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY\\_TOKEN\\_INFO\\_TYPE(3):abc'\nThis annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text.\nIn order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY\\_TOKEN\\_TYPE\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "commonAlphabet",
      "Common alphabets. Only one of this, `custom_alphabet` or `radix` must be specified.\nPossible values are: `NUMERIC`, `HEXADECIMAL`, `UPPER_CASE_ALPHA_NUMERIC`, `ALPHA_NUMERIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "context",
      "The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used.\nIf the context is set but:\n1.  there is no record present when transforming a given value or\n2.  the field is not present when transforming a given value,\na default tweak will be used.\nNote that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string.\nThe tweak is constructed as a sequence of bytes in big endian byte order such that:\n*   a 64 bit integer is encoded followed by a single byte of value 1\n*   a string is encoded in UTF-8 format followed by a single byte of value 2\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigContext_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cryptoKey",
      "The key used by the encryption algorithm.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customAlphabet",
      "This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range \\[2, 95\\]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is:\n``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%!^(MISSING)&*()_-+={[}]|:;\"'<,>.?/``. Only one of this, `common_alphabet` or `radix` must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "radix",
      "The native way to select the alphabet. Must be in the range \\[2, 95\\]. Only one of this, `custom_alphabet` or `common_alphabet` must be specified.",
      [],
      false,
      false,
    ),
  ];
}
